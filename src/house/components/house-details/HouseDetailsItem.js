import React from "react";
import { Typography } from "@material-ui/core";

const HouseDetailsItem = (props) => (
  <div>
    <Typography color="textSecondary" variant="body2">
      {props.detailName}: {props.detailValue ? props.detailValue : " - "}
    </Typography>
  </div>
);

export default HouseDetailsItem;
