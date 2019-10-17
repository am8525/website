import { combineReducers } from 'redux';
import TabReducer from './TabReducer';
import LoadConfigReducer from './LoadConfigReducer';

export default combineReducers({
	tab: TabReducer,
	config: LoadConfigReducer
});