import { KNOW_ANSWER, DONT_KNOW_ANSWER } from "./types";

export const knowAnswer = question => {
	return {
		type: KNOW_ANSWER,
		payload: question
	};
};

export const dontKnowAnswer = question => {
	return {
		type: DONT_KNOW_ANSWER,
		payload: question
	};
};
