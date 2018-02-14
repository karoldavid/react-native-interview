import _ from "lodash";
import {
	DECK_SELECT,
	DECK_CREATE,
	DECKS_FETCH,
	DECKS_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
	list: [],
	loading: false,
	selected: null,
	orderBy: "title",
	sortDirection: "asc"
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
				list: _.orderBy(
					action.payload,
					[deck => deck[state.orderBy].toLowerCase()],
					[state.sortDirection]
				),
				loading: false
			};
		default:
			return state;
	}
}
