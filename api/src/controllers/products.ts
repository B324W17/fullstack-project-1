// product controller here
import { NextFunction, Request, Response } from "express";

import {
  createProductService,
  getProductByIdService,
  getProductList,
} from "../services/products";
import Product from "../models/Product";

export const createProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const productInformation = new Product({
    title: request.body.title,
    price: request.body.price,
    image: request.body.image,
    description: request.body.description,
  });
  try {
    const product = await createProductService(productInformation); //pass to services
    response.status(201).json(product); //return back a response
  } catch (error) {
    next(error); //goes to api error handler
  }
};

export const getAllProducts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const productList = await getProductList(); //pass to services
    console.log(productList, "product");
    response.status(200).json(productList); //return back a response
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const productId = request.params.id; //type string
    const product = await getProductByIdService(productId); //pass to services
    console.log(product, "product");
    response.status(200).json(product); //return back a response
  } catch (error) {
    next(error);
  }
};
