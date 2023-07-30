import React, { useEffect, useState } from "react";
import { Product } from "../../types/type";
import { AlertProps, IconButton, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { productActions } from "../../redux/slices/product";

type FavoriteButtonProp = {
  product: Product;
};
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function FavoriteButton({ product }: FavoriteButtonProp) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
    "success"
  );
  const [alertMessage, setAlertMessage] = useState("");

  const favorites = useSelector((state: RootState) => state.products.favorites);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //logic to keep the favorite button selected when navigating back to the products page
  useEffect(() => {
    const isProductFavorite = favorites.some(
      (favorite) => favorite.title === product.title
    );
    setIsFavorite(isProductFavorite);
  }, [favorites, product]);
  
  const dispatch = useDispatch();
  function addToFavorites(product: Product) {
    dispatch(productActions.addToFavorites(product));
    if (isFavorite) {
      setAlertSeverity("error");
      setAlertMessage(`${product.title} is removed from the wish list`);
    } else {
      setAlertSeverity("success");
      setAlertMessage(`${product.title} is added to the wish list`);
    }
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    setOpen(true);
  }
  return (
    <div>
      <IconButton
        aria-label="add to favorites"
        color={isFavorite ? "error" : "success"}
        onClick={() => addToFavorites(product)}
      >
        <FavoriteIcon />
      </IconButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
          variant="standard"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
