import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import RootReducer from "./Reducers/RootReducer";
//need a rootReducer to import

const initState = {};

const middleware = [thunk];

var store = createStore(
  RootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
