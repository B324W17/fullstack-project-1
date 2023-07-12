import { Request, Response, NextFunction } from "express";

import { createOrderService, getOrderList } from "../services/orders";
import Order from "../models/Order";

export const createOrder = async (
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

export const getOrders = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const orderList = await getOrderList(); //pass to services
    console.log(orderList, "product");
    response.status(200).json(orderList); //return back a response
  } catch (error) {
    next(error);
  }
};
