import Router from "express";

import { createOrder, getOrders } from "../controllers/orders";

const router = Router();

//create an order
router.post("/", createOrder);

//get order
router.get("/", getOrders);

export default router;