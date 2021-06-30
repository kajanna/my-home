import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actionCreators from "../../store/index";
import houseObjectFromFormValues from "../../shered/formElements/houseObjectFromFormValues";
import NewHouseForm from "../components/NewHouseForm";
import Loading from '../../shered/UIElements/Loading';
import Modal from "../../shered/UIElements/Modal";

const NewHouse = (props) => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.houses.error);
  const loading = useSelector((state) => state.houses.loading);
  const userId = useSelector((state) => state.auth.userId);
  const isSubmitted = useSelector((state) => state.houses.isSubmitted);

  const submitNewHouseHandler = (values) => {
    const house = houseObjectFromFormValues(values);
    dispatch(actionCreators.addHouse(house, userId));
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
          <NewHouseForm
            onSubmit={(values) => submitNewHouseHandler(values)}
            buttonText="SAVE HOUSE"
            {...props}
          />
        </React.Fragment>
      )}
    </div>
  );
};
export default NewHouse;
