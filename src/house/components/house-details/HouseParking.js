import React from "react";
import { useSelector } from "react-redux";

import { selectHouseInfo } from "../../../store/index";
import HouseDetailsItem from "./HouseDetailsItem";

function HouseParking(props) {
  const parking = useSelector((state) => selectHouseInfo(state, props.houseId)).parking;
  const parkingPrice = useSelector((state) => selectHouseInfo(state, props.houseId)).parkingPrice;

  return (
    <div>
      <HouseDetailsItem detailName="parking" detailValue={parking} />
      <HouseDetailsItem detailName="parking price" detailValue={parkingPrice} />
    </div>
  );
}

export default HouseParking;
