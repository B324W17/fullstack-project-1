import Router from "express";

import { createOrder, getOrders } from "../controllers/orders";

const router = Router();

//create an order
router.post("/:id", createOrder);

//get order
router.get("/:id", getOrders);

export default router;