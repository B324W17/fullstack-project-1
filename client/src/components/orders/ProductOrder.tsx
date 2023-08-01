import { TableCell, TableRow } from "@mui/material";
import { ProductCart } from "../../types/type";

type ProductOrderProp = {
  product: ProductCart;
};
export default function ProductOrderList({ product }: ProductOrderProp) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell className="order-image" scope="row">
        <img src={product.image} alt="" width="100px" height="100px"/>
      </TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell> {product.price} &euro;</TableCell>
      <TableCell> {product.quantity}</TableCell>
    </TableRow>
  );
}
