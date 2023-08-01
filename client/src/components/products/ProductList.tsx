import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProducts } from "../../redux/thunk/products";
import ProductItem from "./ProductItem";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";

import "./products.css";
import SearchForm from "../form/SearchForm";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="products">
      <div className="search-field">
        <SearchForm />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          marginLeft: "60px",
          marginTop: "30px",
        }}
      >
        <Grid container justifyContent="center" spacing={2}>
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
