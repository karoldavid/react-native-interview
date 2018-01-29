import _ from "lodash";
import {
	DECK_SELECT,
	DECK_CREATE,
	DECKS_FETCH,
	DECKS_FETCH_SUCCESS
} from "../actions/types";
import data from "../data/data.json";
import { makeList } from "../utils/helpers";

const decks = data.map(deck => {
	deck.questions.map((question, index) => {
		question.id = index;
		return question;
	});
	return deck;
});

const INITIAL_STATE = {
	list: [],
	loading: false,
	selected: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case DECK_SELECT:
			return {
				...state,
				selected: action.payload
			};
		case DECKS_FETCH:
			return {
				...state,
				loading: true
			};
		case DECKS_FETCH_SUCCESS:
			return {
				...state,
				list: makeList(action.payload),
				loading: false
			};
		default:
			return state;
	}
}
