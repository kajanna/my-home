import React from "react";
import { useSelector } from "react-redux";

import HouseDetailsItem from "./HouseDetailsItem";
import { selectHouseInfo } from "../../../store/index";

function HouseContact(props) {
  const contactName = useSelector((state) => selectHouseInfo(state, props.houseId)).contactName;
  const contactCell = useSelector((state) => selectHouseInfo(state, props.houseId)).contactCell;
  const contactEmail = useSelector((state) => selectHouseInfo(state, props.houseId)).contactEmail;
  const agencyName = useSelector((state) => selectHouseInfo(state, props.houseId)).agencyName;

  return (
    <div>
      <HouseDetailsItem detailName="contact name" detailValue={contactName} />
      <HouseDetailsItem detailName="contact cell" detailValue={contactCell} />
      <HouseDetailsItem detailName="contact email" detailValue={contactEmail} />
      <HouseDetailsItem detailName="agency name" detailValue={agencyName} />
    </div>
  );
}

export default HouseContact;
