import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import axios from "axios";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartItems);
  const totalValue = useSelector((state: RootState) => state.cart.total);
  const userData = useSelector((state: RootState) => state.user.userData);

  const userId = userData?._id;

  function handleCheckOut() {
    const endpoint = "http://localhost:7000/orders";

    const products = cartList.map((item) => ({
      title: item.product.title,
      price: item.product.price,
      quantity: item.quantity,
    }));
    axios
      .post(endpoint, { userId: userId, products: products })
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
            key={cartItem.product._id}
            cartItem={cartItem.product}
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
