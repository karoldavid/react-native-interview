import { SELECT_DECK } from "./types";

export const selectDeck = deck => {
	return {
		type: SELECT_DECK,
		payload: deck
	};
};
