import { QUESTION_CHANGE, SAVE_QUESTION } from "./types";

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