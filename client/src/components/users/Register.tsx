import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RootState } from "../../redux/store";
import { userActions } from "../../redux/slices/user";
import { BASE_URL } from "../../config/config";

import "./../../css/users.css";

export default function Register() {
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
    const endpoint = `${BASE_URL}/users/register`;
    axios
      .post(endpoint, userInformation)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    dispatch(userActions.clearUserData());
  }
  return (
    <div className="register">
      <div className="register-picture">
        <img
          src="https://freshcart.codescandy.com/assets/images/svg-graphics/signup-g.svg"
          alt="register svg"
        />
      </div>
      <div className="register-form">
        <h1>Register</h1>
        <Typography>
          Welcome to Purr! Enter your email to get started.
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="outlined-basic"
          label="Email Address"
          type="email"
          value={email}
          onChange={getUserEmail}
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="outlined-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={getUserPassword}
          fullWidth
          variant="outlined"
        />
        <Button variant="contained" color="success" onClick={onClickHandler}>
          Register
        </Button>
      </div>
    </div>
  );
}
