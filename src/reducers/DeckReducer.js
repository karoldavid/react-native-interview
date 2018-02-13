import { DECK_CREATE, DECK_CHANGE } from "../actions/types";

const INITIAL_STATE = {
	title: "",
	imageUrl: "https://goo.gl/7ZS1HE",
	questions: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DECK_CREATE:
			return INITIAL_STATE;
		case DECK_CHANGE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};