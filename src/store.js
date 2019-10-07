import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './Reducers/RootReducer';
//need a rootReducer to import

const initState = {};

const middleware = [thunk];

const store = createStore(RootReducer,
						  initState,
						  compose(
						  	applyMiddleware(...middleware),
						  	window.__REDUX_DEVTOOLS_EXTENSION__ &&
						  	window.__REDUX_DEVTOOLS_EXTENSION__())
						  );

export default store;