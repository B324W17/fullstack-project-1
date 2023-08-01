import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./../../css/navbar.css";

export default function NavBarLinks() {
  return (
    <div className="nav-links">
      <Link to="/">
        <Button color="success">Home</Button>
      </Link>
      <Link to={`/products/category/${"essentials"}`}>
        <Button color="success">Essentials</Button>
      </Link>
      <Link to={`/products/category/${"toys"}`}>
        <Button color="success">Toys</Button>
      </Link>
      <Link to={`/products/category/${"toys"}`}>
        <Button color="success">Grooming & Care</Button>
      </Link>
      <Link to="/cart">
        <Button color="success">About us</Button>
      </Link>
      <Link to="/cart">
        <Button color="success">Contact us</Button>
      </Link>
    </div>
  );
}
