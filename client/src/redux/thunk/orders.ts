import axios from "axios";

import { orderActions } from "../slices/order";
import { AppDispatch } from "../store";

export function fetchOrderList(userId: string) {
  const ordersUrl = `http://localhost:7000/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios(ordersUrl);
    const orders = await response.data;
    dispatch(orderActions.getOrders(orders));
  };
}
