import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import House from "./my_home_logo.svg";

const useStyles = makeStyles({
  root: {
    width: 20,
    margin: 8,
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={House} alt="MY HOME" />
    </div>
  );
};
export default Logo;
