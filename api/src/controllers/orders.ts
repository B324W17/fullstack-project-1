import { Request, Response, NextFunction } from "express";

import { createOrderService } from "../services/orders";
import Order from "../models/Order";

const createOrder = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const newOrder = new Order({
      userId: request.params.userId,
      products: request.body.products, //from the front end
    });
    const order = createOrderService(newOrder);
    response.json(order);
  } catch (error) {}
};
