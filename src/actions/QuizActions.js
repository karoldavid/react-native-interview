import { KNOW_ANSWER } from "./types";

export const knowAnswer = question => {
	return {
		type: KNOW_ANSWER,
		payload: question
	};
};
