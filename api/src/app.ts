// server here

import Express from "express";
import cors from "cors";

import productRouter from "./routes/product";
import userRouter from "./routes/user";
import apiErrorHandler from "./middlewares/apiErrorHandler";

const app = Express();

app.use(Express.json());
app.use(cors());

//routes
app.use("/products", productRouter);
app.use("/users", userRouter);

//error handler
app.use(apiErrorHandler);

export default app;
