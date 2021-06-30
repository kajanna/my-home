import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  errorText: {
    height: 10,
    paddingLeft: 8,
    color: theme.palette.error.main,
    marginBottom: 10,
  },
}));

const RenderHelperText = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.errorText}>
      <Typography variant="caption">{props.touched && props.error}</Typography>
    </div>
  );
};

export default RenderHelperText;
