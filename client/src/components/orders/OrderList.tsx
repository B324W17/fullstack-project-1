import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { fetchOrderList } from "../../redux/thunk/orders";
import { AppDispatch, RootState } from "../../redux/store";
import ProductOrderList from "./ProductOrder";
import SideMenu from "../form/SideMenu";
import "./../../css/orders.css";

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
    <div className="orders-container">
      <SideMenu />
      <div className="main">
        <h1>Your Order List</h1>
        {!userData
          ? "Please login or register to view your order list"
          : orderList.length === 0
          ? "You have no orders"
          : orderList.map((item) => (
              <div key={item._id} className="main-table">
                <div>Date: {new Date(item.createdAt).toLocaleDateString()}</div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <caption>
                      <Typography component="h4">
                        Total: {item.total.toFixed(2)} &euro;
                      </Typography>
                    </caption>
                    <TableHead>
                      <TableRow>
                        <TableCell>Products</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Items</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.products.map((product) => (
                        <ProductOrderList key={product._id} product={product} />
                      ))} 
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
      </div>
    </div>
  );
}
