// cart slice
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product, ProductOrder } from "../../types/type";

type CartState = {
  cartList: ProductOrder[];
  total: number;
};

const initialState: CartState = {
  cartList: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const cartProduct = action.payload;

      const isAdded = state.cartList.find(
        (cart) => cart._id === cartProduct._id
      );

      if (!isAdded) {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.cartList.find(
        (cartItem) => cartItem._id === itemId
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.cartList.find(
        (cartItem) => cartItem._id === itemId
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    totalPrice: (state) => {
      const totalPrice = state.cartList.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.total = totalPrice;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartList = state.cartList.filter(
        (item) => item._id !== itemId
      );
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
