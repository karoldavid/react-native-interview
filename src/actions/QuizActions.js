import { ANSWER_SORT, QUIZ_RESET } from "./types";

export const sortAnswer = ({ prop, value }) => {
	return {
		type: ANSWER_SORT,
		payload: {
			prop,
			value
		}
	};
};

export const resetQuiz = () => {
	return {
		type: QUIZ_RESET
	};
};
