import { ProductCart } from "../../types/type";

type ProductOrderProp = {
  product: ProductCart;
};
export default function ProductOrderList({ product }: ProductOrderProp) {
  return (
    <div>
      {product.title}
      {product.price}
      {product.quantity}
    </div>
  );
}
