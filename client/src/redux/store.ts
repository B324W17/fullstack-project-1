//set up the Redux store

import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";

//configure the Redux store
const store = configureStore({
  reducer: {
    products: productReducer,//state manager
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
