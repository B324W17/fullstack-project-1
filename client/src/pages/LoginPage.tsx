import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { userActions } from "../redux/slices/user";
import { useNavigate } from "react-router";

export default function LoginPage() {
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
    const endpoint = "http://localhost:7000/users/login";
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
    <div>
      <h1>LoginPage</h1>
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
      <Button onClick={loginHandler}>Submit</Button>
    </div>
  );
}
