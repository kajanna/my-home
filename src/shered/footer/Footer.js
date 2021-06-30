import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Line from "../UIElements/Line";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Line />
      <div className={classes.root}>
        <Typography color="textSecondary" variant="caption" paragraph={true}>
          Kaja Szokalska 2021
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default Footer;
