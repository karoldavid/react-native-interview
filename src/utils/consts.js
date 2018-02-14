import { Dimensions } from "react-native";
import { deepSkyBlue, darkCyan } from "./colors";

export const SLIDE_DATA = [
	{
		text: "Welcome to React Interview",
		color: darkCyan
	},
	{
		text: "Test your React and React Ecosystem knowledge",
		color: deepSkyBlue
	},
	{
		text: "Do you know the answer?",
		color: darkCyan
	},
	{
		text: "Swipe the flashcard to the right",
		color: deepSkyBlue
	},
	{
		text: "Otherwise, swipe the flashcard to the left",
		color: darkCyan
	},
	{
		text: "Add new decks and cards to a shared database",
		color: deepSkyBlue
	},
	{
		text: "",
		color: darkCyan
	}
];

export const DECK_FORM_INPUTS = [
	{
		label: "Deck Title",
		placeholder: "deck title",
		propName: "title",
		required: true
	}
];

export const QUESTION_FORM_INPUTS = [
	{
		label: "Question",
		placeholder: "question",
		propName: "question",
		required: true
	},
	{
		label: "Answer",
		placeholder: "answer",
		propName: "answer",
		required: true
	},
	{
		label: "source",
		placeholder: "source",
		propName: "source",
		required: false
	}
];

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
export const SWIPE_OUT_DURATION = 250;