import { QUESTION_CHANGE } from "../actions/types";

const INITIAL_STATE = {
	question: "",
	answer: "",
	source: ""
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case QUESTION_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
}