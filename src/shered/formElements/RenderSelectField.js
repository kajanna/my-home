import React from "react";
import { Select, InputLabel, FormControl } from "@material-ui/core/";

import RenderHelperText from "./RenderHelperText";

const RenderSelectField = ({
  input,
  label,
  meta: { touched, error },
  selectionItems,
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor={input.name}>{label}</InputLabel>
    <Select native {...input}>
      {selectionItems &&
        selectionItems.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
    </Select>
    <RenderHelperText touched={touched} error={error} />
  </FormControl>
);

export default RenderSelectField;
