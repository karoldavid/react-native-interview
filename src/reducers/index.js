import { combineReducers } from "redux";
import DecksReducer from "./DecksReducer";
import DeckReducer from "./DeckReducer";

export default combineReducers({
	decks: DecksReducer,
	deck: DeckReducer
});