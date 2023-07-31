//product services

import { NotFoundError } from "../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";

//communicate with the db
export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

//service 2 - get product list
export const getProductList = async (): Promise<ProductDocument[]> => {
  // sort({ title: 1 });
  return Product.find();
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId); //pass the parameter
  if (!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`);
  }
  return foundProduct;
};

export const getProductByCategoryService = async (
  category: string
): Promise<ProductDocument[]> => {
  const products = await Product.find({ category });

  if (products.length === 0) {
    throw new NotFoundError(`${category} not found`);
  }
  return products;
};