import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import { Product } from "../../types/type";
import { cartActions } from "../../redux/slices/cart";
import FavoriteButton from "../wishlist/FavoriteButton";
import "./products.css";

type ProductItemProp = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProp) {
  const [isAddedInCart, setIsAddedInCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
    "success"
  );
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function addToCart(product: Product) {
    dispatch(cartActions.addToCart(product));
    setIsAddedInCart((prevCart) => !prevCart);
    if (!isAddedInCart) {
      setAlertSeverity("success");
      setAlertMessage(`${product.title} is added to cart`);
    }
    setIsAddedInCart((prevCart) => !prevCart);
    setOpen(true);
  }
  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={1}>
        <Link to={`${product._id}`}>
          <CardMedia
            sx={{ height: 200 }}
            image={`${product.image}`}
          ></CardMedia>
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "3px" }}>
            <LocalOfferOutlinedIcon />
            <Typography component="p"> {product.price} &euro;</Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0px",
            marginBottom: "15px",
          }}
        >
          <FavoriteButton product={product} />
          <Button onClick={() => addToCart(product)}>
            <AddShoppingCartOutlinedIcon sx={{ color: "grey" }} />
          </Button>
        </CardActions>
      </Card>
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
