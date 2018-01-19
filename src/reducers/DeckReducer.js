import { CREATE_DECK, DECK_CHANGE } from "../actions/types";

const INITIAL_STATE = {
	title: "",
	imgURL: "",
	questions: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_DECK:
			return state;
		case DECK_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
