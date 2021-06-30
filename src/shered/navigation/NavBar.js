import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Line from "../UIElements/Line";
import SideDrawer from "./SideDrawer";
import NavLinks from ".//NavLinks";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  navLinks: {
    display: "none"
  },
  [theme.breakpoints.up("md")]: {
    menuIcon: {
      display: "none"
    },
    navLinks: {
      display: "block"
    }
  }
}));

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <SideDrawer openDrawer={openDrawer} closeDrawer={closeDrawerHandler} />

      <div position="fixed" color="white" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
            onClick={openDrawerHandler}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <Logo />
          </div>
          <div className={classes.navLinks}>
            <NavLinks />
          </div>
        </Toolbar>
        <Line />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
