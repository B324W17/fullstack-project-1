import { Product } from "../../types/type";

type ProductItemProp = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProp) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}
