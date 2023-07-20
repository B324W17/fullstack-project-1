import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import axios from "axios";

import { RootState } from "../redux/store";
import { userActions } from "../redux/slices/user";

export default function RegisterPage() {
  const { email, password } = useSelector((state: RootState) => state.user);
  const userInformation = { email, password };
  const dispatch = useDispatch();

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(userActions.setEmail(event.target.value));
  }

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(userActions.setPassword(event.target.value));
  }

  const navigate = useNavigate();

  function onClickHandler() {
    const endpoint = "http://localhost:7000/users/register";
    axios
      .post(endpoint, userInformation)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((error) => console.log(error));
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
