import React from "react";

import { Checkbox, FormControlLabel } from "@material-ui/core";

const RenderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

export default RenderCheckbox;
