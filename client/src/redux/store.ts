//set up the Redux store

import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import userReducer from "./slices/user";
import cartReducer from "./slices/cart";

//configure the Redux store
const store = configureStore({
  reducer: {
    products: productReducer, //state manager
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
