import { SELECT_DECK, DECK_CHANGE, SAVE_DECK, DECK_CREATE, DECKS_FETCH, DECKS_FETCH_SUCCESS } from "./types";
import firebase from "firebase";

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
	};
};

export const createDeck = (deck, callback) => {
	return dispatch => {
		firebase
			.database()
			.ref(`/decks`)
			.push(deck)
			.then(() => {
				dispatch({ type: DECK_CREATE });
				if (callback) callback();
			});
	};
};

export const decksFetch = () => {
	return dispatch => {
		dispatch({ type: DECKS_FETCH });
		firebase
			.database()
			.ref(`/decks`)
			.on("value", snapshot => {
				dispatch({
					type: DECKS_FETCH_SUCCESS,
					payload: snapshot.val()
				});
			});
	};
};
