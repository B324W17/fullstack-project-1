import { Button, Typography } from "@mui/material";
import { Product } from "../../types/type";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";

type CartItemProp = {
  cartItem: Product;
  cartItemQuantity: number;
};

export default function CartItem({ cartItem, cartItemQuantity }: CartItemProp) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(cartActions.increment(cartItem._id));
    dispatch(cartActions.totalPrice());
  };
  const handleDecrement = () => {
    dispatch(cartActions.decrement(cartItem._id));
    dispatch(cartActions.totalPrice());
  };
  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(cartItem._id));
    dispatch(cartActions.totalPrice());
  };
  return (
    <div>
      <p>{cartItem.title}</p>
      <p>{cartItem.price}</p>
      <Button variant="outlined" size="small" onClick={handleIncrement}>
        +
      </Button>
      <Typography variant="body1">{cartItemQuantity}</Typography>
      <Button variant="outlined" size="small" onClick={handleDecrement}>
        -
      </Button>
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={handleRemove}
        sx={{ color: "white" }}
      >
        Remove
      </Button>
    </div>
  );
}
