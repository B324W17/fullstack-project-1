import axios from "axios";

import { orderActions } from "../slices/order";
import { AppDispatch } from "../store";
import { BASE_URL } from "../../config/config";

export function fetchOrderList(userId: string) {
  const ordersUrl = `${BASE_URL}/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios(ordersUrl);
    const orders = await response.data;
    dispatch(orderActions.getOrders(orders));
  };
}
