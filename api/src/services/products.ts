//product services

import Product, { ProductDocument } from "../models/Product";

//communicate with the db
export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

//service 2 - get product list
export const getProductList = async (): Promise<
  ProductDocument[] | undefined
> => {
  try {
   // sort({ title: 1 });
      return Product.find();
  } catch (error) {
    console.log(error);
  }
};
