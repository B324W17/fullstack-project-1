// product controller here
import { Request, Response } from "express";

import productServices from "../services/products";
import Product from "../models/Product";

export const createProduct = async (request: Request, response: Response) => {
  const productInformation = new Product({
    title: request.body.title,
    price: request.body.price,
  });
  const product = await productServices.createProductService(
    productInformation
  );

  response.status(200).json(product);
};
