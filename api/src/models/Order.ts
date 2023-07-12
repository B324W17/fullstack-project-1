import mongoose, { Document } from "mongoose";

import { ProductDocument } from "./Product";
import ProductSchema from "./Product";

export type OrderDocument = Document & {
  createdAt: Date;
  products: ProductDocument[];
  userId: string;
};

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  //embedded syntax to product document
  products: [ProductSchema],
  //reference syntax to user document
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //from user document
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
