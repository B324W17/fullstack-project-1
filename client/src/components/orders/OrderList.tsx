import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";

import { fetchOrderList } from "../../redux/thunk/orders";
import ProductOrderList from "./ProductOrder";

export default function OrderList() {
  const userData = useSelector((state: RootState) => state.user.userData);
  const orderList = useSelector((state: RootState) => state.orders.orders);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userData?._id) {
      dispatch(fetchOrderList(userData._id));
    }
  }, []);

  return (
    <div>
      order list
      {orderList.map((item) => (
        <div>
          <div>{new Date(item.createdAt).toLocaleDateString()}</div>
          <div>
            {item.products.map((product) => (
              <ProductOrderList product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
