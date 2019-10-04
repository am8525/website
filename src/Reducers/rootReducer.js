import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import loadConfigReducer from './loadConfigReducer';

export default combineReducers({
	tab: tabReducer,
	config: loadConfigReducer
});