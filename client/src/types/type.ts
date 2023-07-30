export type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
  image: string;
};

export type User = {
  _id: string;
  email: string;
  password: string;
};

export type ProductCart = Product & {
  quantity: number;
};

export type Order = {
  _id: string;
  userId: string;
  products: ProductCart[];
  createdAt: string;
  total: number;
};
