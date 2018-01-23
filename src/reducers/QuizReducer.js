import KNOW_ANSWER from "../actions/types";

const INITIAL_QUIZ = {
	know: [],
	donwKnot: []
};

export default function(state = {}, action ) {
	switch(action.type) {
		case KNOW_ANSWER:
			console.log(action.type)
			return state;
		default:
			return state
	}
}
