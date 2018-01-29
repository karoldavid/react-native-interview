import { QUESTION_CHANGE, QUESTION_CREATE } from "./types";
import firebase from "firebase";

export const updateQuestion = ({ prop, value }) => {
	return {
		type: QUESTION_CHANGE,
		payload: { prop, value }
	};
};

export const createQuestion = (question, deckId, callback) => {
	return dispatch => {
		firebase
			.database()
			.ref(`/decks/${deckId}/questions`)
			.push(question)
			.then(() => {
				dispatch({ type: QUESTION_CREATE });
				if (callback) callback();
			});
	};
};