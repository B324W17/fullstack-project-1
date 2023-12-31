import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, //each user will have a unique email
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
