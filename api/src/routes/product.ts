import { Router } from "express";

import {
  createProduct,
  getAllCategories,
  getAllProducts,
  getProductById,
} from "./../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/category", getAllCategories);

export default router;