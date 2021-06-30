import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import NavLinks from "./NavLinks";
import Logo from "./Logo";

const useStyles = makeStyles({
  list: {
    margin: 24
  },
  logo: {
    margin: 12
  }
});

const SideDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={props.openDrawer}
      onClose={() => props.closeDrawer()}
    >
      <div className={classes.list} onClick={() => props.closeDrawer()}>
        <div className={classes.logo}>
         <Logo />
        </div>
        <NavLinks />
      </div>
    </Drawer>
  );
};

export default SideDrawer;
