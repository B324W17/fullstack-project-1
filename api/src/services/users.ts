import { NotFoundError } from './../helpers/apiError';
//user services

import User, { UserDocument } from "../models/User";

//communicate with the db
export const createUserService = async (
  user: UserDocument
): Promise<UserDocument> => {
  return user.save();
};

export const findUserByEmail = async (userEmail: string) => {
  const foundUser = await User.findOne({ email: userEmail });
  if (!foundUser) {
    throw new NotFoundError(`User ${userEmail} not found`);
  }
  return foundUser;
}