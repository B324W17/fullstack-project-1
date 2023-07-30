import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/slices/product";
import { RootState } from "../../redux/store";
import Login from "../users/Register";
import Register from "../users/Register";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cart = useSelector((state: RootState) => state.cart.cartList);
  const favorites = useSelector((state: RootState) => state.products.favorites);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar position="fixed" sx={{ background: "white" }}>
          <Toolbar className="upper-menu">
            <div className="logo">
              <img
                src="https://i.postimg.cc/h4x7Jf38/pngfind-com-cat-paw-png-766735.png"
                alt="logo"
                width="45px"
                height="40px"
              />
              <h1>PURR</h1>
            </div>
            <div className="nav-links">
              <Link to="/">
                <Button color="success">Home</Button>
              </Link>
              <Link to="/products">
                <Button
                  color="success"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Products
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Cat Essentials</MenuItem>
                  <MenuItem onClick={handleClose}>Cat Toys</MenuItem>
                  <MenuItem onClick={handleClose}>Cat Grooming & Care</MenuItem>
                </Menu>
              </Link>
              <Link to="/login">
                <Button color="success">Login</Button>
              </Link>
              <Link to="/profile">
                <Button color="success">Profile</Button>
              </Link>
              <Link to="/cart">
                <Button color="success">Cart</Button>
              </Link>
            </div>

            <div className="icons">
              <IconButton size="large">
                <Badge badgeContent={favorites.length} color="success">
                  <FavoriteBorderOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton size="large">
                <Badge badgeContent={cart.length} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              <Register/>
            </div>
          </Toolbar>

          <Divider />
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
