//product services

import { ProductDocument } from "../models/Product";

//communicate with the db
const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

export default { createProductService };
