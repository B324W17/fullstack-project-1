import { Router } from "express";

import { createProduct, getAllProducts} from "./../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProducts);

export default router;