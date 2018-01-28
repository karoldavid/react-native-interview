import { QUESTION_CHANGE, SAVE_QUESTION, QUESTION_CREATE } from "./types";

export const updateQuestion = ({ prop, value }) => {
	return {
		type: QUESTION_CHANGE,
		payload: { prop, value }
	};
};

export const saveQuestion = question => {
	return {
		type: SAVE_QUESTION,
		payload: question
	}
}

export const createQuestion = (question, deckId, callback) => {
	return dispatch => {
		firebase
			.database()
			.ref(`/decks/${deckId}/questions`)
			.push(deck)
			.then(() => {
				dispatch({ type: QUESTION_CREATE });
				if (callback) callback();
			});
	};
};