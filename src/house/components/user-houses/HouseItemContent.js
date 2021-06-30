import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Typography } from "@material-ui/core";

import { selectHouseInfo } from "../../../store/index";

const useStyles = makeStyles({
  smallFont: {
    fontSize: 9,
  },
});

const HouseItemContent = (props) => {
  const classes = useStyles();

  const price = useSelector((state) => selectHouseInfo(state, props.houseId)).price;
  const usableArea = useSelector((state) => selectHouseInfo(state, props.houseId)).usableArea;

  return (
    <CardContent>
      <Typography variant="body1" color="textSecondary" component="p">
        price: {price} zł
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        usable area: {usableArea} m<sup className={classes.smallFont}>2</sup>
      </Typography>
    </CardContent>
  );
};

export default HouseItemContent;
