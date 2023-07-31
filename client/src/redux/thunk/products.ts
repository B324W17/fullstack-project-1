//an async action creator for fetching product data from the api
//and updating the Redux store with the received data

import { BASE_URL } from "../../config/config";
import { productActions } from "../slices/product";
import { AppDispatch } from "../store";

const productUrl = `${BASE_URL}/products`;

export function fetchProducts() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProducts(productData)); //payload
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `${BASE_URL}/products/${productId}`; //make api call
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productDetailUrl);
    const productDetail = await response.json();
    dispatch(productActions.getProductDetail(productDetail)); //pass it to product slics
  };
}

export function fetchProductByCategory(category: string | undefined) {
  const categoryUrl = `${BASE_URL}/products/category/${category}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(categoryUrl);
    const categoryProducts = await response.json();
    dispatch(productActions.getProductByCategory(categoryProducts));
  };
}
