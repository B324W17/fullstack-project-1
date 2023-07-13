import { Router } from "express";
import passport from "passport";

import { createUser, logInWithPassword, updateUserController } from "./../controllers/users";

const router = Router();

//login/register
//use post - getting info from user
router.post("/register", createUser);

router.post("/login", logInWithPassword);

//update user info
//passport -> middleware -- if user has logged in or not --token is valid or invalid
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserController
);

export default router;
