import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: string;
  description?: string;
  category?: string;
  image?: string;
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
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
