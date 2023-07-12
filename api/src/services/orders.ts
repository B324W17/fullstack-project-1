// create an order
// save it to the db
import { OrderDocument } from "../models/Order";

//communicate with the db
export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return order.save();
};

