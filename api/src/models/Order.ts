import mongoose, { Document } from "mongoose";

type ProductOrderDocument = Document & {
  title: string;
  price: number;
  quantity: number;
};

const ProductOrderSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

export type OrderDocument = Document & {
  createdAt: Date;
  products: ProductOrderDocument[];
  userId: string;
  total: number;
};

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  //embedded syntax to product document
  products: [ProductOrderSchema],
  //reference syntax to user document
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //from user document
  total: {
    type: Number,
    default: 0, //set default value as 0 for the total field
  },
});

//Pre-hook to update the total field when a new order document is saved
OrderSchema.pre<OrderDocument>("save", function (next) {
  const total = this.products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  this.total = total;
  next();
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
