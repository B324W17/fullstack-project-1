import {
  Button,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import { Product } from "../../types/type";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import "./../../css/carts.css";

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
    <TableRow
      className="cart-item-container"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell className="cart-image" scope="row">
        <img src={cartItem.image} alt="" width="100px" height="70px" />
      </TableCell>
      <TableCell className="cart-title">
        <p>{cartItem.title}</p>
        <p>{cartItem.price} &euro;</p>
      </TableCell>
      <TableCell>
        <div className="btns">
          <Button variant="outlined" size="small" onClick={handleIncrement}>
            +
          </Button>
          <Typography variant="body1">{cartItemQuantity}</Typography>
          <Button variant="outlined" size="small" onClick={handleDecrement}>
            -
          </Button>
        </div>
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleRemove}
          sx={{ color: "white" }}
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
}
