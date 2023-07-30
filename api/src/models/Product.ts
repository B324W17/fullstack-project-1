import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
  image: string;
};

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
