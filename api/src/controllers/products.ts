// product controller here
import { Request, Response } from "express";

import productServices from "../services/products";
import Product from "../models/Product";

export const createProduct = async (request: Request, response: Response) => {
  const productInformation = new Product({
    title: request.body.title,
    price: request.body.price,
    image: request.body.image,
    description: request.body.description,
  });
  try {
    const product = await productServices.createProductService(
      productInformation
    ); //pass to services
    response.status(200).json(product); //return back a response
  } catch (error) {
    response.status(500).json({ error: error });
  }
};
