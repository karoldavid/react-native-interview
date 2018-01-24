import { SORT_ANSWER, RESET_QUIZ } from "../actions/types";

const INITIAL_STATE = {
	know: [],
	dontKnow: [],
	answered: 0
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SORT_ANSWER:
			return {
				...state,
				[action.payload.prop]: [
					...state[action.payload.prop],
					action.payload.value
				],
				answered: state.answered + 1
			};

		case RESET_QUIZ:
			return INITIAL_STATE
		default:
			return state;
	}
}