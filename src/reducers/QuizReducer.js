import {
	ANSWER_SORT,
	QUIZ_RESET,
	QUIZ_SELECT,
	QUIZ_RESTART
} from "../actions/types";
import { shuffle } from "../utils/helpers";
import { REHYDRATE } from "redux-persist/constants";

const INITIAL_STATE = {
	know: [],
	dontKnow: [],
	answered: 0,
	questions: [],
	title: "",
	index: 0
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
				answered: state.answered + 1,
				index: state.index + 1
			};
		case QUIZ_SELECT:
			return {
				...state,
				questions: shuffle(action.payload.questions),
				title: action.payload.title
			};
		case QUIZ_RESTART:
			return {
				know: [],
				dontKnow: [],
				answered: 0,
				index: 0,
				questions: shuffle(state.questions),
				title: state.title
			};

		case QUIZ_RESET:
			return INITIAL_STATE;

		case REHYDRATE:
			return INITIAL_STATE;
		default:
			return state;
	}
}
