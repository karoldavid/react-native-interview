import { SORT_ANSWER, RESET_QUIZ } from "./types";

export const sortAnswer = ({ prop, value }) => {
	return {
		type: SORT_ANSWER,
		payload: {
			prop,
			value
		}
	};
};

export const resetQuiz = () => {
	return {
		type: RESET_QUIZ
	};
};
