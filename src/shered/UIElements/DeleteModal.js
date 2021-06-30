import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import { deleteHouse } from "../../store/index";

function DeleteModal(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const deleteItemHandler = (userId, houseId) => {
    dispatch(deleteHouse(userId, houseId));
    props.close();
  };

  return (
    <Modal
      open={props.open}
      close={props.close}
      title={`Delete house - ${props.address}`}
      modalText="Are you sure you want to delete all information about this property? This action is permanent and cannot be reversed."
      buttonText="NO"
      buttonText2="YES"
      onClickButton={props.close}
      onClickButton2={() => deleteItemHandler(userId, props.houseId)}
    />
  );
}

export default DeleteModal;
