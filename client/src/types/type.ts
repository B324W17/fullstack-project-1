export type Product = {
  _id: string;
  title: string;
  price: string;
  image?: string;
  description?: string;
};

export type User = {
  _id: string;
  email: string;
  password: string;
};
