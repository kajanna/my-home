import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { selectHouseInfo } from "../../store/index";
import HouseDetails from "../components/house-details/HouseDetails";
import EditModal from "../../shered/UIElements/EditModal";
import DeleteModal from "../../shered/UIElements/DeleteModal";
import ActionButtons from "../../shered/UIElements/ActionButtons";

const useStyles = makeStyles({
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 10,
  },
});

function HouseDetailsInfo() {
  const classes = useStyles();
  let { houseId } = useParams();

  const address = useSelector((state) =>
    selectHouseInfo(state, houseId)
  ).address;
  const userId = useSelector((state) => selectHouseInfo(state, houseId)).userId;
  const isSubmitted = useSelector((state) => state.houses.isSubmitted);
  const token = useSelector((state) => state.auth.token);

  const [openDeleteModal, setDeleteModal] = useState(false);
  const [openEditModal, setEditModal] = useState(false);

  const openDeleteModalHandler = () => setDeleteModal(true);
  const closeDeleteModalHandler = () => setDeleteModal(false);
  const openEditModalHandler = () => setEditModal(true);
  const closeEditModalHandler = () => setEditModal(false);

  return (
    <React.Fragment>
      <DeleteModal
        open={openDeleteModal}
        close={closeDeleteModalHandler}
        address={address}
        houseId={houseId}
        token={token}
      />
      <EditModal
        open={openEditModal}
        close={closeEditModalHandler}
        address={address}
        houseId={houseId}
        userId={userId}
      />
      {isSubmitted ? (
        <Redirect to="/" />
      ) : (
        <div>
          <div className={classes.actionButtons}>
            <ActionButtons
              openEditModal={openEditModalHandler}
              openDeleteModal={openDeleteModalHandler}
            />
          </div>
          <HouseDetails houseId={houseId} />
        </div>
      )}
    </React.Fragment>
  );
}

export default HouseDetailsInfo;
