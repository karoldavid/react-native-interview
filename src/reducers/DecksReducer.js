import { SELECT_DECK } from "../actions/types";
import data from "../data/data.json";

const INITIAL_STATE = {
	list: data,
	selected: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SELECT_DECK:
			return { ...state, selected: action.payload };
		default:
			return state;
	}
}
