// server here

import Express from "express";
import cors from "cors";

import productRouter from "./routes/product";
import apiErrorHandler from "./middlewares/apiErrorHandler";

const app = Express();

app.use(Express.json());
app.use(cors());

//routes
app.use("/products", productRouter);

//error handler
app.use(apiErrorHandler);

export default app;
