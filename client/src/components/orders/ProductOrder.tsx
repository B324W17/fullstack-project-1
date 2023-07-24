import { ProductOrder } from "../../types/type";

type ProductOrderProp = {
  product: ProductOrder;
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
