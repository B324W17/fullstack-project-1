// create an order
// save it to the db
import Order, { OrderDocument } from "../models/Order";

//communicate with the db
export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};

//get order by user id
export const getOrderList = async (
  userId: string
): Promise<OrderDocument[]> => {
  // sort({ title: 1 });
  return Order.find({ userId: userId });
};
