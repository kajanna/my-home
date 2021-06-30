import React from "react";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { IconButton } from "@material-ui/core";

function ActionButtons(props) {
  return (
    <React.Fragment>
      <IconButton onClick={props.openEditModal}>
        <EditOutlinedIcon />
      </IconButton>
      <IconButton onClick={props.openDeleteModal}>
        <DeleteOutlinedIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default ActionButtons;
