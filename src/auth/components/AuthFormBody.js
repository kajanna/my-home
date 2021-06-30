import React from "react";
import { Field } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";

import RenderTextField from "../../shered/formElements/RenderTextField";
import FormButton from "../../shered/formElements/FormButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "warp",
    margin: 20,
    marginTop: 8,
  },
  button: {
    width: "100%",
  },
});

const AuthFormBody = (props) => {
  const classes = useStyles();

  const { buttonText, submitting, valid } = props;

  return (
    <div className={classes.root}>
      <Field
        name="email"
        component={RenderTextField}
        label="email"
        type="email"
      />
      <Field
        name="password"
        component={RenderTextField}
        label="password"
        type="password"
      />
      <div className={classes.button}>
        <FormButton disabled={!valid || submitting} buttonText={buttonText} />
      </div>
    </div>
  );
};

export default AuthFormBody;
