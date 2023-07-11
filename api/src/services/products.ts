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

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  try {
    const foundProduct = await Product.findById(productId);//pass the parameter
    if (!foundProduct) {
      console.log("can't find product");
    }
    return foundProduct;
  } catch (error) {
    console.log(error);
  }
};
