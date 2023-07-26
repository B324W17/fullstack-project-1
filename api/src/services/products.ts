//product services

import { NotFoundError } from "../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";
import { Category, CategoryDocument } from "./../models/Product";

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

// service for category
export const createCategoryService = async (
  category: CategoryDocument
): Promise<CategoryDocument> => {
  return category.save();
};

//service 2 - get product list
export const getCategories = async (): Promise<CategoryDocument[]> => {
  // sort({ title: 1 });
  return Category.find();
};

//service for subcategory
// service - create category
export const createSubCategoryService = async (
  subcategory: CategoryDocument
): Promise<CategoryDocument> => {
  return subcategory.save();
};