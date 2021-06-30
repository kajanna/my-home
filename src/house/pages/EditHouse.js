import React from "react";

import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EditHouseForm from "../components/EditHouseForm";
import { selectHouseInfo } from "../../store/index";
import houseObjectFromFormValues from "../../shered/formElements/houseObjectFromFormValues";
import * as actionCreators from "../../store/index";
import Modal from "../../shered/UIElements/Modal";
import Loading from "../../shered/UIElements/Loading";

const EditHouse = () => {
  const houseId = useParams().houseId;

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);
  const error = useSelector((state) => state.houses.error);
  const loading = useSelector((state) => state.houses.loading);
  const isSubmitted = useSelector((state) => state.houses.isSubmitted);
  const editedHouse = useSelector((state) => selectHouseInfo(state, houseId));

  const submitEditedHouseHandler = (values) => {
    const house = houseObjectFromFormValues(values);
    dispatch(actionCreators.updateHouse(userId, houseId, house));
  };

  return (
    <div>
      {isSubmitted ? (
        <Redirect to="/" />
      ) : (
        <React.Fragment>
          {error && (
            <Modal
              open={!!error}
              close={() => dispatch(actionCreators.clearHousesError())}
              title="Something went wrong"
              modalText={error.message}
              onClickButton={() => dispatch(actionCreators.clearHousesError())}
              buttonText="CLOSE"
            />
          )}
          {loading && <Loading />}
          <EditHouseForm
            initialValues={editedHouse}
            onSubmit={(values) => submitEditedHouseHandler(values)}
            buttonText="SAVE HOUSE"
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default EditHouse;
