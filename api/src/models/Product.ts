import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: string;
};

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
