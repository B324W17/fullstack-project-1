import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartItems);
  const totalValue = useSelector((state: RootState) => state.cart.total);

    function handleCheckOut() { }
    
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
