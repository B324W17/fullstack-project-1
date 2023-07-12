//user services

import { UserDocument } from "../models/User";

//communicate with the db
export const createUserService = async (
  user: UserDocument
): Promise<UserDocument> => {
  return user.save();
};

