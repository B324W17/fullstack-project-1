// product controller here
import { Request, Response } from "express";

import { createProductService, getProductList } from "../services/products";
import Product from "../models/Product";

export const createProduct = async (request: Request, response: Response) => {
  const productInformation = new Product({
    title: request.body.title,
    price: request.body.price,
    image: request.body.image,
    description: request.body.description,
  });
  try {
    const product = await createProductService(productInformation); //pass to services
    response.status(200).json(product); //return back a response
  } catch (error) {
    response.status(500).json({ error: error });
  }
};

export const getAllProducts = async (request: Request, response: Response) => {
  try {
    const productList = await getProductList(); //pass to services
    console.log(productList, "product");
    response.status(200).json(productList); //return back a response
  } catch (error) {
    response.status(500).json({ error: error });
  }
};
