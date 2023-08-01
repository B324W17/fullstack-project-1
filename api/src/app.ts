// server here

import Express from "express";
import cors from "cors";
import passport from "passport";

import productRouter from "./routes/product";
import userRouter from "./routes/user";
import orderRouter from "./routes/order";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import { jwtStrategy } from "./config/passport";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy); //make it available for the whole app

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the server!"); // You can customize the response here
});
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);

//error handler
app.use(apiErrorHandler);

export default app;
