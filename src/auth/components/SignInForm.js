import React from "react";
import { reduxForm } from "redux-form";

import AuthFormBody from "./AuthFormBody";
import validate from "../../shered/formElements/validate";

const SignInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <AuthFormBody buttonText={props.buttonText} {...props} />
    </form>
  );
};

export default reduxForm({
  form: "signinForm",
  validate,
})(SignInForm);
