import { useSelector } from "react-redux";
import {
    Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { RootState } from "../../redux/store";
import WishItem from "./WishItem";
import "./../../css/wishlist.css";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const favorites = useSelector((state: RootState) => state.products.favorites);

  if (favorites.length === 0) {
    return (
      <div className="favs">
        <div className="title">
          <h1>My Wish List</h1>
        </div>
        <div className="wish-list-container">
          <p>No favorite items yet.</p>
        </div>
        <Button
          sx={{ width: "15%" }}
          variant="contained"
          component={Link}
          to="/products"
        >
          continue shopping
        </Button>
      </div>
    );
  }
  return (
    <div className="favs">
      <div className="title">
        <h1>My Wish List</h1>
      </div>
      <div className="wishlist-container">
        <TableContainer component={Paper} className="wish-list">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {favorites.map((favorite) => (
                <WishItem key={favorite._id} favorite={favorite} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
