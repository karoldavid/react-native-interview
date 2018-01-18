import data from "../data/data.json";

const INITIAL_STATE = {
	list: data
}

export default function(state = INITIAL_STATE, action ) {
	switch(action.payload) {
		default: 
		return state
	}
}