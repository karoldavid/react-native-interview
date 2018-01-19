import { SELECT_DECK, SAVE_DECK, SAVE_QUESTION } from "../actions/types";
import data from "../data/data.json";

const INITIAL_STATE = {
	list: data,
	selected: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SELECT_DECK:
			return {
				...state,
				selected: action.payload
			};
		case SAVE_DECK:
			return {
				...state,
				list: [...state.list, action.payload]
			};
		case SAVE_QUESTION:
			return {
				...state,
				list: state.list.map(deck => {
					if (deck.title === state.selected.title) {
						deck.questions = [...deck.questions, action.payload];
					}
					return deck;
				})
			};
		default:
			return state;
	}
}
