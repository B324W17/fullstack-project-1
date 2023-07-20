import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../types/type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";

type ProductItemProp = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProp) {
  const [isAddedInCart, setIsAddedInCart] = useState(false);
  const dispatch = useDispatch();

  function addToCart(product: Product) {
    dispatch(cartActions.addToCart(product));
    setIsAddedInCart((prevCart) => !prevCart);
  }
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Link to={`${product._id}`}>
        <button>More detail</button>
      </Link>
      <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
    </div>
  );
}
