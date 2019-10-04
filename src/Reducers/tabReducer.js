import { TabEventType, TabEventCreator } from '../Actions/tabEvent';

const initState = {
	openTab: 'none'
}

export default function tabReducer(state = initState, action) {
	switch (action.type) {
		case TabEventType.showTab:
			return {
				...state,
				openTab: action.tabType
			};
		case TabEventType.hideTab:
			return {
				...state,
				openTab: 'none'
			};
		default:
			return state;
	}
}