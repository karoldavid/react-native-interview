import { ANSWER_SORT, QUIZ_RESET } from "../actions/types";

const INITIAL_STATE = {
	know: [],
	dontKnow: [],
	answered: 0
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ANSWER_SORT:
			return {
				...state,
				[action.payload.prop]: [
					...state[action.payload.prop],
					action.payload.value
				],
				answered: state.answered + 1
			};

		case QUIZ_RESET:
			return INITIAL_STATE;
		default:
			return state;
	}
}
