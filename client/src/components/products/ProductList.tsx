import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProducts } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      {products.map((product) => (
        <Grid >
          <ProductItem product={product} />
        </Grid>
      ))}
    </div>
  );
}
