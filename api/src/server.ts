// connect database
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = 7002;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    //run server
    app.listen(port, () => {
      console.log(`The server is running on ${port}`);
    });
  })
  .catch((error: Error) => {
    console.log(
      "MongoDB connection error. Please make sure the database is running."
    );
    process.exit(1);
  });
