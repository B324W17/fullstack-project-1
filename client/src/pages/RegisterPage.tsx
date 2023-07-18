import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { userActions } from "../redux/slices/user";
import axios from "axios";
import { Button, TextField } from "@mui/material";

export default function RegisterPage() {
  const { email, password } = useSelector((state: RootState) => state.users);
  const userInformation = { email, password };
  const dispatch = useDispatch();

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(userActions.setEmail(event.target.value));
  }

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(userActions.setPassword(event.target.value));
  }

  function onClickHandler() {
    const endpoint = "http://localhost:7000/users/register";
    axios
      .post(endpoint, userInformation)
      .then((response) => console.log(response))
      .catch((error) => error);
  }
  return (
    <div>
      <h1>Register user</h1>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        value={email}
        onChange={getUserEmail}
      ></TextField>
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        variant="standard"
        value={password}
        onChange={getUserPassword}
      ></TextField>
      <Button onClick={onClickHandler}>Submit</Button>
    </div>
  );
}
