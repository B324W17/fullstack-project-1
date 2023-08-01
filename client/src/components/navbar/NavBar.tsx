import React from "react";
import { AppBar, Box, Divider, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import NavBarLinks from "./NavBarLinks";
import NavBarIcons from "./NavBarIcons";
import "./../../css/navbar.css";

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
            <NavBarLinks />
            <NavBarIcons />
          </Toolbar>
          <Divider />
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
