import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 2,
    backgroundColor: theme.palette.primary.main,
    margin: 16,
    marginTop: 0
  }
}));

const Line = () => {
  const classes = useStyles();
  
  return <div className={classes.root}></div>;
};

export default Line;
