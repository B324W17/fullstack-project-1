import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { userActions } from "../../redux/slices/user";
import { orderActions } from "../../redux/slices/order";
import { useParams } from "react-router";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);
  const orderData = useSelector((state: RootState) => state.orders.orders);
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

    const endpoint = `http://localhost:7000/users/${userData?._id}`;

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

  const dispatchOrderAction = useDispatch<AppDispatch>();
  const userId = orderData?.userId;
  function onOrdersHandler() {
    useEffect(() => {
      if (userId) {
        dispatch(orderActions.getOrders(userId));
      }
    }, [dispatch, userId]);
  }
  if (!userData) {
    return <div>no data</div>;
  }
  return (
    <div>
      <h1>User Profile</h1>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        value={formData.email}
        onChange={setUserFirstName}
        InputProps={{ readOnly: readOnly }}
      />

      <Button onClick={onEditHandler}>Edit</Button>
      <Button onClick={onSubmitHandler}>submit</Button>
      <Button onClick={onOrdersHandler}>Orders</Button>
    </div>
  );
}
