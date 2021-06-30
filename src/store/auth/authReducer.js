import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  isAuth: false,
  userId: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userId: action.userId,
        isAuth: true,
        loading: false,
      };
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        userId: null,
        isAuth: false,
        loading: false,
      };
    case actionTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export default authReducer;
