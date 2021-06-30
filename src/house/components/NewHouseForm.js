import React from "react";
import { reduxForm } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import HouseFormBody from "./HouseFormBody";
import validate from "../../shered/formElements/validate";

const useStyles = makeStyles({
  root: {
    margin: 24,
    marginTop: 8
  }
});

const NewHouseForm = (props) => {
  const classes = useStyles();

  const { submitting, valid } = props;
  return (
    <div className={classes.root}>
      <form onSubmit={props.handleSubmit}>
        <Typography variant="h5" align="center" color="secondary" gutterBottom>
          Your House
        </Typography>
        <HouseFormBody
          submitting={submitting}
          valid={valid}
          buttonText="SAVE HOUSE"
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "NewHouseForm",
  validate,
})(NewHouseForm);
