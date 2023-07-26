import mongoose, { Document, Schema, Types } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: number;
  description: string;
  category?: string; //reference to the parent category
  subcategory?: string; //Array of references to subcategories
  image: string;
};

export type CategoryDocument = Document & {
  name: string;
  parentCategory: string;
  subcategories?: string[];
};

const CategorySchema = new Schema<CategoryDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const SubCategorySchema = new Schema<CategoryDocument>({
  name: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: String,
    ref: "Category",
    required: true,
  },
});
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
    required: false,
    ref: "Category", //reference to the parent category model
  },
  subcategories: [{
    type: String,
    ref: "Category",
    required: false,
  }],
  image: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model<CategoryDocument>("Category", CategorySchema);
export const SubCategory = mongoose.model<CategoryDocument>(
  "SubCategory",
  SubCategorySchema
);
export default mongoose.model<ProductDocument>("Product", ProductSchema);

