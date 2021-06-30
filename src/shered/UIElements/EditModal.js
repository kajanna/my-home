import React from "react";
import { useHistory } from "react-router-dom";

import Modal from "./Modal";

function EditModal(props) {
  let history = useHistory();

  const goToEditHandler = (userId, houseId) => {
    history.push(`/${userId}/edit/${houseId}`);
  };
  return (
    <Modal
      open={props.open}
      close={props.close}
      title={`Edit house - ${props.address}`}
      modalText="Do you want to add new information about this property?"
      buttonText="NO"
      buttonText2="YES"
      onClickButton={props.close}
      onClickButton2={() => goToEditHandler(props.userId, props.houseId)}
    />
  );
}

export default EditModal;
