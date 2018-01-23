import { SORT_ANSWER } from "./types";

export const sortAnswer = ({ prop, value }) => {
	return {
		type: SORT_ANSWER,
		payload: {
			prop,
			value
		}
	};
};
