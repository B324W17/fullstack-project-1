import { Router } from "express";

import { createCategory, createProduct, createSubCategory, getAllCategories, getAllProducts, getProductById} from "./../controllers/products";


const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/category", createCategory);
router.post("/category/subcategory", createSubCategory);
router.get("/categories", getAllCategories);

export default router;