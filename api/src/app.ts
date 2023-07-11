// server here

import Express from "express";
import cors from "cors";

import productRouter from "./routes/product";

const app = Express();

app.use(Express.json());
app.use(cors());

//routes
app.use("/products", productRouter);

export default app;