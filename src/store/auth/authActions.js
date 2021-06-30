import * as actionTypes from "../actionTypes";
import { clearHouses } from "../houses/housesActions"
import { auth } from "../../firebaseConfig";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = userId => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId
  };
};

export const authFailure = (error) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error: error,
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        dispatch(authSuccess(userData.user.uid))
      })
      .catch((error) => {
        dispatch(authFailure(error.message));
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        dispatch(authSuccess(userData.user.uid));
      })
      .catch((error) => {
        dispatch(authFailure(error));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(authStart());
    auth
      .signOut()
      .then(() => {
        dispatch(authLogout());
        dispatch(clearHouses());
      })
      .catch((error) => {
        dispatch(authFailure(error));
      });
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_AUTH_ERROR,
  };
};
