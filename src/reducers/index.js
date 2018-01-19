import { combineReducers } from "redux";
import DecksReducer from "./DecksReducer";
import DeckReducer from "./DeckReducer";
import QuestionReducer from "./QuestionReducer";

export default combineReducers({
	decks: DecksReducer,
	deck: DeckReducer,
	question: QuestionReducer
});
