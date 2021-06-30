import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

import houseReducer from "./houses/houseReducer";
import authReducer from "./auth/authReducer";

const reducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  houses: houseReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
