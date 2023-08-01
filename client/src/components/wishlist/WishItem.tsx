import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Product } from "../../types/type";
import "./../../css/wishlist.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import { productActions } from "../../redux/slices/product";

type WishItemProp = {
  favorite: Product;
};

export default function WishItem({ favorite }: WishItemProp) {
  const dispatch = useDispatch();
  function addToCart(favorite: Product) {
    dispatch(cartActions.addToCart(favorite));
  }
  const handleRemove = () => {
    dispatch(productActions.addToFavorites(favorite));
  };
  return (
    <TableRow
      className="wish-item-container"
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell className="wish-image" scope="row">
        <img src={favorite.image} alt="" width="100px" height="70px" />
      </TableCell>
      <TableCell className="wish-title">
        <p>{favorite.title}</p>
      </TableCell>
      <TableCell>
        <p>{favorite.price} &euro;</p>
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="success"
          onClick={() => addToCart(favorite)}
        >
          Add to cart
        </Button>
      </TableCell>
      <TableCell>
        <IconButton
          size="small"
          onClick={handleRemove}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
