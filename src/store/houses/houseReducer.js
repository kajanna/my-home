import * as actionTypes from "../actionTypes";

const initState = {
  loading: false,
  isSubmitted: false,
  error: null,
  houses: [],
};

const houseReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOUSES_START:
      return {
        ...state,
        loading: true,
        error: null,
        isSubmitted: false,
      };
    case actionTypes.ADD_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSubmitted: true,
        houses: state.houses.concat(action.house),
      };
    case actionTypes.DELETE_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSubmitted: true,
        houses: state.houses.filter((h) => h.id !== action.houseId),
      };
    case actionTypes.UPDATE_HOUSE_SUCCESS:
      let updatedHouses = state.houses.map((h) => {
        if (h.id !== action.houseId) {
          return h;
        } else {
          return action.house;
        }
      });
      return {
        ...state,
        loading: false,
        isSubmitted: true,
        houses: updatedHouses,
      };
    case actionTypes.FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        houses: action.houses,
      };

    case actionTypes.CHANGE_HOUSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.CLEAR_HOUSES_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default houseReducer;
