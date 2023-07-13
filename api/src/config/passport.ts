//compare the token from the front end
import dotenv from "dotenv";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { findUserByEmail } from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const jwtStrategy = new JwtStrategy(
  //option
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //receive token from front end
  },
  //callback
  async (payload, done) => {
    const userEmail = payload.email;
    const foundUser = await findUserByEmail(userEmail);
    done(null, foundUser);
    //go to the controller next()
  }
);
