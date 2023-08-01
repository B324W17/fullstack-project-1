import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

import { RootState } from "../../redux/store";
import { userActions } from "../../redux/slices/user";
import { BASE_URL } from "../../config/config";
import "./../../css/users.css";

export default function Login() {
  const { email, password } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(userActions.setEmail(event.target.value));
  }
  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(userActions.setPassword(event.target.value));
  }

  const navigate = useNavigate();

  function loginHandler() {
    const endpoint = `${BASE_URL}/users/login`;
    axios
      .post(endpoint, { email, password })
      .then((response) => {
        if (response.status === 200) {
          //save user data to redux
          dispatch(userActions.setUserData(response.data.userData));

          //save token to local storage
          const userToken = response.data.token;
          localStorage.setItem("userToken", userToken);

          //navigate to user info page
          navigate("/profile");
        }
        console.log(response);
      })
      .catch((error) => error);
  }
  return (
    <div className="login">
      <div className="login-picture">
        <img
          src="https://freshcart.codescandy.com/assets/images/svg-graphics/signin-g.svg"
          alt=""
        />
      </div>
      <div className="login-form">
        <h1>Login to Purr</h1>
        <Typography>
          Welcome back to Purr! Enter your email to get started.
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
        <Button variant="contained" color="success" onClick={loginHandler}>
          Login
        </Button>
      </div>
    </div>
  );
}
