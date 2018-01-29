import { QUESTION_CHANGE, QUESTION_CREATE } from "../actions/types";

const INITIAL_STATE = {
	question: "",
	answer: "",
	source: ""
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case QUESTION_CREATE:
			return INITIAL_STATE;
		case QUESTION_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
}
