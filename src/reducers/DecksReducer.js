import _ from "lodash";
import {
	SELECT_DECK,
	SAVE_DECK,
	SAVE_QUESTION,
	DECK_CREATE,
	DECKS_FETCH,
	DECKS_FETCH_SUCCESS
} from "../actions/types";
import data from "../data/data.json";

const decks = data.map(deck => {
	deck.questions.map((question, index) => {
		question.id = index;
		return question;
	});
	return deck;
});

const INITIAL_STATE = {
	list: [],
	deckList: [],
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
		case DECKS_FETCH_SUCCESS:
			return {
				...state,
				list: _.map(action.payload, (val, uid) => {
					return {
						...val,
						uid
					};
				})
			};
		default:
			return state;
	}
}
