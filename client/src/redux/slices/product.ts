//product reducer

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type ProductState = {
  products: Product[];
  productDetail: Product | null;
};

const initialState: ProductState = {
  products: [],
  productDetail: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    getProductDetail: (state, action: PayloadAction<Product>) => {
      state.productDetail = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
