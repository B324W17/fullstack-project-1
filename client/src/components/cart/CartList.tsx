import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import axios from "axios";

import { RootState } from "../../redux/store";
import { BASE_URL } from "../../config/config";
import CartItem from "./CartItem";
import "./carts.css";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const totalValue = useSelector((state: RootState) => state.cart.total);
  const userData = useSelector((state: RootState) => state.user.userData);
  const [openAlert, setOpenAlert] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  function handleCheckOut() {
    const endpoint = `${BASE_URL}/orders/${userData?._id}`;
    const token = localStorage.getItem("userToken");
    if (!userData) {
      setOpenAlert(true);
      return;
    }
    axios
      .post(
        endpoint,
        { products: cartList },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => error);
    setSnackbarOpen(true);
  }
  function handleAlertClose() {
    setOpenAlert(false);
  }
  
  if (cartList.length === 0) {
    return (
      <div className="carts">
        <div className="title">
          <h1>My Cart List</h1>
        </div>
        <div className="cart-list-container">
          <p>No items in the cart.</p>
        </div>
        <Button
          sx={{ width: "15%" }}
          variant="contained"
          component={Link}
          to="/products"
        >
          continue shopping
        </Button>
      </div>
    );
  } else {
    return (
      <div className="carts">
        <div className="title">
          <h1>My Cart List</h1>
        </div>
        <div className="cart-list-container">
          <TableContainer component={Paper} className="cart-list">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {cartList.map((cartItem) => (
                  <CartItem
                    key={cartItem._id}
                    cartItem={cartItem}
                    cartItemQuantity={cartItem.quantity}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="btn-checkout">
            <h2>Summary</h2>
            <div>
              <h4>Total: {totalValue.toFixed(2)}</h4>
            </div>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={handleCheckOut}
            >
              CHECK OUT
            </Button>
            <Button variant="contained" component={Link} to="/products">
              continue shopping
            </Button>
          </div>
        </div>
        <Dialog open={openAlert} onClose={handleAlertClose}>
          <DialogTitle>Please login or signup to make an order!</DialogTitle>
          <DialogContent>
            Please log in or sign up to proceed with the checkout.
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAlertClose} color="error">
              close
            </Button>
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
          </DialogActions>
        </Dialog>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000} // Adjust the duration as needed (in milliseconds)
          onClose={handleSnackbarClose}
          message="Order placed successfully!"
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="primary"
                onClick={handleSnackbarClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </div>
    );
  }
}
