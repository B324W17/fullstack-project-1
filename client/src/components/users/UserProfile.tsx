import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

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
    return <div>no data</div>;
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
