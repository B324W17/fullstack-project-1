// user controller
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { createUserService, findUserByEmail, updateUser } from "../services/users";
import User from "../models/User";

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //destructuring
  try {
    const { email, password } = request.body;
    const userInformation = new User({
      email: email,
      password: password,
    });
    const user = await createUserService(userInformation); //pass to services
    response.status(201).json(user); //return back a response
  } catch (error) {
    next(error); //goes to api error handler
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassword = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    //find user by email
    const userData = await findUserByEmail(request.body.email); //from database
    if (!userData) {
      response.status(403).json({ message: "no account yet" });
      return;
    }
    //response.json(userData);
    //token
    // sign -> payload, jwt secret(for better sec for the token), expire_time
    const token = jwt.sign(
      {
        email: userData.email,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    response.json({ userData, token });
  } catch (error) {
    next(error); //goes to api error handler
  }
};

//update
export const updateUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const update = request.body;
  const userId = request.params.id;
  const updatedUser = await updateUser(userId, update);
  response.json(updatedUser);
};
