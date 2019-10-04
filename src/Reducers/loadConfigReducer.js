import { LoadConfigEventType } from '../Actions/loadConfigEvent';

export default function loadConfigReducer(state = {}, action) {
	switch(action.type) {
		case LoadConfigEventType.configLoad:
			return {
				...state,
				...(action.jsonData)
			};
		default:
			return state;
	}
}