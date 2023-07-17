//product reducer

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
      getProducts: (state, action:PayloadAction<Product[]>) => {
          state.products = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
