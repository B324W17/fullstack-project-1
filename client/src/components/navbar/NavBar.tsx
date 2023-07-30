import { Link } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import "./navbar.css";

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
            <div className="search">
              <div className="search-field">
                <TextField
                  fullWidth
                  id="fullWidth"
                  sx={{ color: "success" }}
                  label="Search"
                  placeholder="product name"
                  type="search"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  color="success"></TextField>
              </div>
            </div>
            <div className="icons">
              <IconButton size="large">
                <Badge badgeContent={7} color="success">
                  <FavoriteBorderOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton size="large">
                <Badge badgeContent={1} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </div>
          </Toolbar>
          <div className="lower-menu">
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/cart">Cart</Link>
            </div>
          </div>
          <Divider />
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
