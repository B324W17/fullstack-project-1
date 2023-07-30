// product controller here
import { NextFunction, Request, Response } from "express";

import {
  createProductService,
  getCategories,
  getProductByIdService,
  getProductList,
} from "../services/products";
import Product from "../models/Product";

export const createProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //destructuring
  const { title, price, description, category, subcategory, image } =
    request.body;

  try {
    const productInformation = new Product({
      title: title,
      price: price,
      description: description,
      category: category,
      subcategory: subcategory,
      image: image,
    });
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

export const getAllCategories = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const categoryList = await getCategories(); //pass to services
    console.log(categoryList, "category");
    response.status(200).json(categoryList); //return back a response
  } catch (error) {
    next(error);
  }
};

//subcategory - controller