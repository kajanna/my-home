import React from "react";
import { useDispatch } from "react-redux";

import Modal from "./Modal";
import { clearError } from "../../store/index";

function ErrorModal(props) {
  const dispatch = useDispatch;
  
  const closeErrorModalHandler = () => dispatch(clearError());

  return (
    <Modal
      open={props.open}
      close={props.close}
      title={props.title}
      modalText={props.modalText}
      buttonText="CLOSE"
      onClickButton={closeErrorModalHandler}
    />
  );
}

export default ErrorModal;
