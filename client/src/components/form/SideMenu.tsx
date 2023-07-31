import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button, Typography } from "@mui/material";

import "./form.css";

export default function SideMenu() {
  return (
    <div className="side-menu-container">
      <div className="side-menu">
        <Link to="/profile">
          <Button className="btn" color="success">
            <SettingsOutlinedIcon />
            <Typography>Settings</Typography>
          </Button>
        </Link>
        <Link to="/order">
          <Button className="btn" color="success">
            <ShoppingBagOutlinedIcon />
            <Typography>Orders</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
