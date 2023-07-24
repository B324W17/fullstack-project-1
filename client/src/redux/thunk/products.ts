//an async action creator for fetching product data from the api
//and updating the Redux store with the received data

import { productActions } from "../slices/product";
import { AppDispatch } from "../store";

const productUrl = "https://backend-oqv7.onrender/products";

export function fetchProducts() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProducts(productData)); //payload
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `https://backend-oqv7.onrender/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productDetailUrl);
    const productDetail = await response.json();
    dispatch(productActions.getProductDetail(productDetail));
  };
}
