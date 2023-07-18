import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../types/type";

type ProductItemProp = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProp) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Link to={`${product._id}`}>
        <button>More detail</button>
      </Link>
    </div>
  );
}
