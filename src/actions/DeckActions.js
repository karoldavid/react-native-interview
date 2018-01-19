import { SELECT_DECK, DECK_CHANGE, SAVE_DECK } from "./types";

export const selectDeck = deck => {
	return {
		type: SELECT_DECK,
		payload: deck
	};
};

export const updateDeck = ({ prop, value }) => {
	return {
		type: DECK_CHANGE,
		payload: { prop, value }
	};
};

export const saveDeck = deck => {
	return {
		type: SAVE_DECK,
		payload: deck
	}
}