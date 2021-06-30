import React from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 14,
    marginBottom: 24,
    backgroundColor: theme.palette.secondary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const FormButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      type="submit"
      disabled={props.disabled}
      className={classes.root}
      size="large"
      fullWidth
    >
      {props.buttonText}
    </Button>
  );
};

export default FormButton;
