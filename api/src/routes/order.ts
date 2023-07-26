import Router from "express";

import { createOrder, getOrders } from "../controllers/orders";

const router = Router();

//create an order
router.post("/:userId", createOrder);

//get order
router.get("/:userId", getOrders);

export default router;