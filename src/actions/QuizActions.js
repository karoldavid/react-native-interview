import { ANSWER_SORT, QUIZ_RESET, QUIZ_SELECT, QUIZ_RESTART } from "./types";

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

export const restartQuiz = () => {
	return {
		type: QUIZ_RESTART
	};
};

export const selectQuiz = ({ questions, title }) => {
	return {
		type: QUIZ_SELECT,
		payload: { questions, title }
	};
};