import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Box, Button, Typography } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductDetail } from "../../redux/thunk/products";
import FavoriteButton from "../wishlist/FavoriteButton";
import { Product } from "../../types/type";
import { cartActions } from "../../redux/slices/cart";

export default function ProductDetail() {
  const product = useSelector(
    (state: RootState) => state.products.productDetail
  );
  const result = useParams();
  const productId = result.id;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId)); //pass it to redux thunk
    }
  }, [dispatch, productId]);

  function addToCart(product: Product) {
    dispatch(cartActions.addToCart(product));
  }
  if (!product) {
    return <div className="details">no data</div>;
  }
  return (
    <div className="details">
      <div className="product-detail">
        <img
          className="product-image"
          src={`${product.image}`}
          alt={product.title}
        />
      </div>
      <div className="product-text">
        <h2>{product.title}</h2>
        <h4>{product.category.toUpperCase()}</h4>
        <h5>{product.subcategory.toUpperCase()}</h5>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "3px" }}>
          <LocalOfferOutlinedIcon />
          <Typography component="p"> {product.price} &euro;</Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography component="p"> {product.description} </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "30px",
            padding: "0px",
            marginBottom: "15px",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
          <FavoriteButton product={product} />
        </Box>
      </div>
    </div>
  );
}
