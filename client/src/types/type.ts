export type Product = {
  _id: string;
  title: string;
  price: number;
  image?: string;
  description?: string;
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
};
