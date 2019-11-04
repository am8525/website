import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./Reducers/RootReducer";
//need a rootReducer to import

const initState = {};

const middleware = [thunk];

var store = createStore(
  RootReducer,
  initState,
  compose(applyMiddleware(...middleware))
);

export default store;
