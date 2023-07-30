//product reducer

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type ProductState = {
  products: Product[];
  productDetail: Product | null;
  favorites: Product[];
};

const initialState: ProductState = {
  products: [],
  productDetail: null,
  favorites: [],
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
    searchProduct: (state, action: PayloadAction<string>) => {
      const result = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.products = result;
    },
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const favorite = action.payload;
      const isAlreadyAdded = state.favorites.some(
        (favProduct) => favProduct._id === favorite._id
      ); //compare ids of the ones that were already added to the one now selected
      if (isAlreadyAdded) {
        const removeFavorite = state.favorites.filter(
          (preFav) => preFav.title != favorite.title
        );
        state.favorites = removeFavorite;
      } else {
        state.favorites.push(favorite);
      }
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
