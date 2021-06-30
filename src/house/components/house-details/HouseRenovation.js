import React from "react";
import { useSelector } from "react-redux";

import { selectHouseInfo } from "../../../store/index";
import HouseDetailsItem from "./HouseDetailsItem";

function HouseRenovation(props) {
  
  const renovationArea = useSelector((state) => selectHouseInfo(state, props.houseId)).renovationArea;
  const renovationDescription = useSelector((state) => selectHouseInfo(state, props.houseId)).renovationDescription;
  const renovationPrice = useSelector((state) => selectHouseInfo(state, props.houseId)).renovationPrice;

  return (
    <div>
      <HouseDetailsItem
        detailName="renovation area"
        detailValue={renovationArea}
      />
      <HouseDetailsItem
        detailName="renovation description"
        detailValue={renovationDescription}
      />
      <HouseDetailsItem
        detailName="renovation price"
        detailValue={renovationPrice}
      />
    </div>
  );
}

export default HouseRenovation;
