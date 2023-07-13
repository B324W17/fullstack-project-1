//user services
import { NotFoundError } from "./../helpers/apiError";

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
};

export const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, { new: true });
  if (!foundUser) {
    throw new NotFoundError(`user ${userId}not found`);
  }
  return foundUser;
};
