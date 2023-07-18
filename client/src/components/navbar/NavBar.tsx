import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}