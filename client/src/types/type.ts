export type Product = {
  _id: string;
  title: string;
  price: string;
  image?: string;
  description?: string;
};

export type User = {
  email: string;
  password: string;
};
