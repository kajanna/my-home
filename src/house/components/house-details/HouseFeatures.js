import React from "react";
import { useSelector } from "react-redux";

import HouseDetailsItem from "./HouseDetailsItem";
import { selectHouseInfo } from "../../../store/index";

function HouseFeatures(props) {
  const floor = useSelector(state => selectHouseInfo(state, props.houseId)).floor;
  const floors = useSelector(state => selectHouseInfo(state, props.houseId)).floors;
  const heating = useSelector(state => selectHouseInfo(state, props.houseId)).heating;
  const hotWater = useSelector(state => selectHouseInfo(state, props.houseId)).hotWater;
  const bedrooms = useSelector(state => selectHouseInfo(state, props.houseId)).bedrooms;
  const bathrooms = useSelector(state => selectHouseInfo(state, props.houseId)).bathrooms;
  
  return (
    <div>
      <HouseDetailsItem detailName="floor" detailValue={floor} />
      <HouseDetailsItem detailName="floors" detailValue={floors} />
      <HouseDetailsItem detailName="heating" detailValue={heating} />
      <HouseDetailsItem detailName="hot water source" detailValue={hotWater} />
      <HouseDetailsItem detailName="bedrooms" detailValue={bedrooms} />
      <HouseDetailsItem detailName="bathrooms" detailValue={bathrooms} />
    </div>
  );
}

export default HouseFeatures;
