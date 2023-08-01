import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { RootState } from "../../redux/store";
import "./../../css/navbar.css";

export default function NavBarIcons() {
  const [anchorElAccountMenu, setAnchorElAccountMenu] =
    useState<null | HTMLElement>(null);
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
    <div className="icons">
      <Link to="/wishlist">
        <IconButton size="large">
          <Badge badgeContent={favorites.length} color="success">
            <FavoriteBorderOutlinedIcon />
          </Badge>
        </IconButton>
      </Link>
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
        <MenuItem component={Link} to="/login" onClick={handleCloseAccountMenu}>
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
  );
}
