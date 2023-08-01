import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductDetail } from "../../redux/thunk/products";

export default function ProductDetail() {
  const product = useSelector(
    (state: RootState) => state.products.productDetail
  );
  const result = useParams();
  const productId = result.id;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));//pass it to redux thunk
    }
  }, [dispatch, productId]);
  console.log(product);
  if (!product) {
    return <div className="details">no data</div>;
  }
  return (
    <div className="details">
      product detail <p>{product.title}</p>
    </div>
  );
}
