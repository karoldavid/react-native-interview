import { SORT_ANSWER } from "../actions/types";

const INITIAL_QUIZ = {
	know: [],
	dontKnow: [],
	answered: 0
};

export default function(state = INITIAL_QUIZ, action) {
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
		default:
			return state;
	}
}
