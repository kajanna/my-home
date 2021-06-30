import React from "react";
import { useSelector } from "react-redux";

import { selectHouseInfo } from "../../../store/index";
import HouseDetailsItem from "./HouseDetailsItem";

function HouseStorage(props) {
  const storage = useSelector((state) => selectHouseInfo(state, props.houseId))
    .storage;
  const storagePrice = useSelector((state) =>
    selectHouseInfo(state, props.houseId)
  ).storagePrice;

  return (
    <div>
      <HouseDetailsItem detailName="storage" detailValue={storage} />
      <HouseDetailsItem detailName="storage price" detailValue={storagePrice} />
    </div>
  );
}

export default HouseStorage;
