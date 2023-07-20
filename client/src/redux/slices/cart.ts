// cart slice
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  total: number;
};

const initialState: CartState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const cartProduct = action.payload;

      const isAdded = state.cartItems.find(
        (cart) => cart.product._id === cartProduct._id
      );

      if (!isAdded) {
        state.cartItems.push({ product: cartProduct, quantity: 1 });
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.cartItems.find(
        (cartItem) => cartItem.product._id === itemId
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.cartItems.find(
        (cartItem) => cartItem.product._id === itemId
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    totalPrice: (state) => {
      const totalPrice = state.cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
      state.total = totalPrice;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== itemId
      );
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
