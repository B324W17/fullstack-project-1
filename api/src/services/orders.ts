// create an order
// save it to the db
import Order, { OrderDocument } from "../models/Order";

//communicate with the db
export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};

export const getOrderList = async (): Promise<OrderDocument[]> => {
    // sort({ title: 1 });
    return Order.find();
  };