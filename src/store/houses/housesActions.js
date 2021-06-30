import * as actionTypes from "../actionTypes";
import axios from "axios";
import { auth } from "../../firebaseConfig";

//sync actions
export const changeHousesStart = () => {
  return {
    type: actionTypes.CHANGE_HOUSES_START,
  };
};
export const addHouseSuccess = (house) => {
  return {
    type: actionTypes.ADD_HOUSE_SUCCESS,
    house: house,
  };
};
export const deleteHouseSuccess = (houseId) => {
  return {
    type: actionTypes.DELETE_HOUSE_SUCCESS,
    houseId: houseId,
  };
};
export const updateHouseSuccess = (houseId, house) => {
  return {
    type: actionTypes.UPDATE_HOUSE_SUCCESS,
    houseId: houseId,
    house: house,
  };
};
export const fetchHousesSuccess = (houses) => {
  return {
    type: actionTypes.FETCH_HOUSES_SUCCESS,
    houses: houses,
  };
};

export const changeHousesFailure = (error) => {
  return {
    type: actionTypes.CHANGE_HOUSES_FAILURE,
    error: error,
  };
};

export const clearHousesError = () => {
  return {
    type: actionTypes.CLEAR_HOUSES_ERROR,
  };
};

export const clearHouses = () => {
  return {
    type: actionTypes.CLEAR_HOUSES,
  };
};

//async  actionCreators
export const fetchHouses = (userId) => {
  return (dispatch) => {
    dispatch(changeHousesStart());
    auth.currentUser.getIdToken(true).then((idToken) => {
      axios
        .get(
          `${process.env.REACT_APP_DATABASE_URL}houses/${userId}.json?auth=${idToken}`
        )
        .then((response) => {
          if (response.status === 200) {
            let houses = [];
            for (const key in response.data) {
              let house = { ...response.data[key], houseId: key };
              houses.push(house);
            }
            dispatch(fetchHousesSuccess(houses));
          }
        })
        .catch((error) => {
          dispatch(changeHousesFailure(error));
        });
    });
  };
};

export const addHouse = (house, userId) => {
  return (dispatch) => {
    dispatch(changeHousesStart());
    auth.currentUser.getIdToken(true).then((idToken) => {
      axios
        .post(
          process.env.REACT_APP_DATABASE_URL + "houses/" + userId + ".json?auth=" + idToken,
          house
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch(addHouseSuccess(house));
          }
        })
        .catch((error) => {
          dispatch(changeHousesFailure(error));
        });
    });
  };
};

export const deleteHouse = (userId, houseId) => {
  return (dispatch) => {
    dispatch(changeHousesStart());
    auth.currentUser.getIdToken(true).then((idToken) => {
      axios
        .delete(
          `${process.env.REACT_APP_DATABASE_URL}houses/${userId}/${houseId}.json?auth=${idToken}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(deleteHouseSuccess(houseId));
          }
        })
        .catch((error) => {
          dispatch(changeHousesFailure(error));
        });
    });
  };
};

export const updateHouse = (userId, houseId, house) => {
  return (dispatch) => {
    dispatch(changeHousesStart());
    auth.currentUser.getIdToken(true).then((idToken) => {
      axios
        .patch(
          `${process.env.REACT_APP_DATABASE_URL}houses/${userId}/${houseId}.json?auth=${idToken}`,
          house
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch(updateHouseSuccess(houseId, house));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(changeHousesFailure(error));
        });
    });
  };
};
