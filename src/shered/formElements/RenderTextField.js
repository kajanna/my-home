import React from "react";
import { TextField } from "@material-ui/core";

import RenderHelperText from "./RenderHelperText";

const RenderTextField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <TextField
      variant="outlined"
      margin="normal"
      label={label}
      type={type}
      {...input}
      error={!!(touched && error)}
      fullWidth
    />
    <RenderHelperText error={error} touched={touched} />
  </div>
);

export default RenderTextField;

