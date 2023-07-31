import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import "./carts.css";
import { Link } from "react-router-dom";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const totalValue = useSelector((state: RootState) => state.cart.total);
  const userData = useSelector((state: RootState) => state.user.userData);

  function handleCheckOut() {
    const endpoint = `${BASE_URL}/orders/${userData?._id}`;
    const token = localStorage.getItem("userToken");
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
  }

  console.log(cartList);
  if (cartList.length === 0) {
    return (
      <div>
        <p>No items in the cart.</p>
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
      </div>
    );
  }
}
