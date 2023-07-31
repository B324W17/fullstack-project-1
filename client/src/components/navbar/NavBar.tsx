import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AppBar,
  Avatar,
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
  Tooltip,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
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

  const [anchorElAccountMenu, setAnchorElAccountMenu] =
    React.useState<null | HTMLElement>(null);
  const openAccountMenu = Boolean(anchorElAccountMenu);
  const handleClickAccountMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElAccountMenu(event.currentTarget);
  };
  const handleCloseAccountMenu = () => {
    setAnchorElAccountMenu(null);
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

            <div className="icons">
              {" "}
              <IconButton size="large">
                <Badge badgeContent={favorites.length} color="success">
                  <FavoriteBorderOutlinedIcon />
                </Badge>
              </IconButton>
              <Link to="/cart">
                <IconButton size="large">
                  <Badge badgeContent={cart.length} color="success">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
              <Tooltip title="Account settings">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  aria-controls={openAccountMenu ? "account-menu" : undefined}
                  aria-expanded={openAccountMenu ? "true" : undefined}
                  onClick={handleClickAccountMenu}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElAccountMenu}
                id="account-menu"
                open={openAccountMenu}
                onClose={handleCloseAccountMenu}
                onClick={handleCloseAccountMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  component={Link}
                  to="/register"
                  onClick={handleCloseAccountMenu}
                >
                  <Avatar /> Register
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/login"
                  onClick={handleCloseAccountMenu}
                >
                  <Avatar /> Login
                </MenuItem>
                <Divider></Divider>
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleCloseAccountMenu}
                >
                  <Avatar />
                  My Profile
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>

          <Divider />
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
