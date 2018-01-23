import { KNOW_ANSWER, DONT_KNOW_ANSWER } from "../actions/types";

const INITIAL_QUIZ = {
	know: [],
	dontKnow: []
};

export default function(state = INITIAL_QUIZ, action) {
	switch (action.type) {
		case KNOW_ANSWER:
			return { ...state, know: [...state.know, action.payload] };
		case DONT_KNOW_ANSWER:
			return { ...state, dontKnow: [...state.dontKnow, action.payload] };
		default:
			return state;
	}
}
