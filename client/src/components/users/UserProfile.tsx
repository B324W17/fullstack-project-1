import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";

import { RootState } from "../../redux/store";
import { userActions } from "../../redux/slices/user";
import { BASE_URL } from "../../config/config";
import SideMenu from "../form/SideMenu";
import "./users.css";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);
  const [formData, setFormData] = useState({ email: userData?.email });

  const [readOnly, setReadOnly] = useState(true);

  function setUserFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, email: event.target.value });
  }

  function onEditHandler() {
    setReadOnly(false);
  }

  function onSubmitHandler() {
    const token = localStorage.getItem("userToken");

    const endpoint = `${BASE_URL}/users/${userData?._id}`;

    axios
      .put(endpoint, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "new data");
        dispatch(userActions.setUserData(response.data));
      })
      .catch((error) => error);
    setReadOnly(true);
  }

  if (!userData) {
    return (
      <div className="profile">
        <SideMenu />
        <div className="main">
          <h1>You don't have an account yet!</h1>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              width: "50%",
              alignItems:"center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/login"
              color="success"
            >
              login
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              color="success"
            >
              register
            </Button>
          </Box>
        </div>
      </div>
    );
  }
  return (
    <div className="profile">
      <SideMenu />
      <div className="main">
        <h1>Account Setting</h1>
        <h2>Account details</h2>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={setUserFirstName}
          InputProps={{ readOnly: readOnly }}
        />
        <div className="buttons">
          <Button onClick={onEditHandler}>Edit</Button>
          <Button onClick={onSubmitHandler}>submit</Button>
        </div>
      </div>
    </div>
  );
}
