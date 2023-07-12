// user controller
import { NextFunction, Request, Response } from "express";

import { createUserService } from "../services/users";
import User from "../models/User";

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //destructuring
  const { email, password } = request.body;
  const userInformation = new User({
    email: email,
    password: password,
  });
  try {
    const user = await createUserService(userInformation); //pass to services
    response.status(201).json(user); //return back a response
  } catch (error) {
    next(error); //goes to api error handler
  }
};
