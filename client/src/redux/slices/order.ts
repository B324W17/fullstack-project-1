import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Order } from "../../types/type";

type OrderState = {
  orders: Order[];
};
const initialState: OrderState = {
  orders: [],
};
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
