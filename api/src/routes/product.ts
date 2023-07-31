import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  getProductByCategory,
  getProductById,
} from "./../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getProductByCategory);

export default router;