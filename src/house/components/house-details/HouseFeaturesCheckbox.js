import React from "react";
import { useSelector } from "react-redux";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Typography } from "@material-ui/core";

import { selectHouseInfo } from "../../../store/index";


function HouseFeaturesCheckbox(props) {
  const balcony = useSelector((state) => selectHouseInfo(state, props.houseId)).balcony;
  const parquet = useSelector((state) => selectHouseInfo(state, props.houseId)).parquet;
  const elevator = useSelector((state) => selectHouseInfo(state, props.houseId)).elevator;
  const niceStaircase = useSelector((state) => selectHouseInfo(state, props.houseId)).niceStaircase;
  const niceView = useSelector((state) => selectHouseInfo(state, props.houseId)).niceView;
  const airConditioning = useSelector((state) => selectHouseInfo(state, props.houseId)).airConditioning;

  return (
    <div>
      <Typography color="textSecondary" variant="body2">
        {balcony ? (
          <CheckBoxIcon fontSize="inherit" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        )}{" "}
        balcony
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {parquet ? (
          <CheckBoxIcon fontSize="inherit" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        )}{" "}
        parquet
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {elevator ? (
          <CheckBoxIcon fontSize="inherit" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        )}{" "}
        elevator
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {niceStaircase ? (
          <CheckBoxIcon fontSize="inherit" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        )}{" "}
        nice staircase
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {niceView ? (
          <CheckBoxIcon fontSize="inherit" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        )}{" "}
        nice view
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {airConditioning ? (
          <CheckBoxIcon fontSize="inherit" />
        ) : (
          <CheckBoxOutlineBlankIcon fontSize="inherit" />
        )}{" "}
        air conditioning
      </Typography>
    </div>
  );
}

export default HouseFeaturesCheckbox;
