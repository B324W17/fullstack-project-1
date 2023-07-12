import { Router } from "express";

import { createProduct, getAllProducts, getProductById} from "./../controllers/products";
import { createOrder } from "../controllers/orders";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/orders", createOrder);

export default router;