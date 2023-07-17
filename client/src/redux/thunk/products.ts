//an async action creator for fetching product data from the api
//and updating the Redux store with the received data

import { productActions } from "../slices/product";
import { AppDispatch } from "../store";

const productUrl = "http://localhost:7000/products";

export function fetchProducts() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProducts(productData)); //payload
  };
}
