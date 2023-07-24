import { orderActions } from "../slices/order";
import { AppDispatch } from "../store";

export function fetchProductDetail(userId: string) {
  const ordersUrl = `http://localhost:7000/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(ordersUrl);
    const orders = await response.json();
    dispatch(orderActions.getOrders(orders));
  };
}
