import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";

import { fetchOrderList } from "../../redux/thunk/orders";
import ProductOrderList from "./ProductOrder";

import "./orders.css";
import { Link } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SideMenu from "../form/SideMenu";

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
        {orderList.map((item) => (
          <div key={item._id} className="main-table">
            <div>{new Date(item.createdAt).toLocaleDateString()}</div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell>Products</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>Total</TableCell>
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
