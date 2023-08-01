import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductByCategory } from "../../redux/thunk/products";
import SearchForm from "../form/SearchForm";
import ProductItem from "./ProductItem";
import "./products.css";

export default function ProductCategory() {
  const productByCategory = useSelector(
    (state: RootState) => state.products.productsByCategory
  );
  console.log(productByCategory);
  const result = useParams();
  const productCategory = result.category;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productCategory) {
      dispatch(fetchProductByCategory(productCategory));
    }
  }, [dispatch, productCategory]);

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
          {productByCategory.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
