import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../types/type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";

import "./products.css";
import FavoriteButton from "../wishlist/FavoriteButton";

type ProductItemProp = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProp) {
  const [isAddedInCart, setIsAddedInCart] = useState(false);
  const dispatch = useDispatch();

  function addToCart(product: Product) {
    dispatch(cartActions.addToCart(product));
    setIsAddedInCart((prevCart) => !prevCart);
  }
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={0}>
        <Link to={`${product._id}`}>
          <CardMedia
            sx={{ height: 300 }}
            image={`${product.image}`}
          ></CardMedia>
        </Link>
        <CardContent sx={{ padding: "7px" }}>
          <Typography variant="h4" component="h3">
            {product.title}
          </Typography>
          <Typography variant="h6" component="h3">
            {product.subcategory}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px",
            marginBottom: "15px",
          }}
        >
          <Typography variant="subtitle1" component="p">
            Price: ${product.price}
          </Typography>
          <FavoriteButton product={product} />
          <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
        </CardActions>
      </Card>
    </div>
  );
}
