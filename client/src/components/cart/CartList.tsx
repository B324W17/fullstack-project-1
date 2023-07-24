import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import axios from "axios";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const totalValue = useSelector((state: RootState) => state.cart.total);
  const userData = useSelector((state: RootState) => state.user.userData);

  function handleCheckOut() {
    const endpoint = `https://backend-oqv7.onrender/orders/${userData?._id}`;
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
      <div>
        <h1>your cart list</h1>
        {cartList.map((cartItem) => (
          <CartItem
            key={cartItem._id}
            cartItem={cartItem}
            cartItemQuantity={cartItem.quantity}
          />
        ))}
        <p>Total: {totalValue}</p>
        <Button variant="text" size="large" onClick={handleCheckOut}>
          CHECK OUT
        </Button>
      </div>
    );
  }
}
