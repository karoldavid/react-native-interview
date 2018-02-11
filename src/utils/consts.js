import { Dimensions } from "react-native";
import { deepSkyBlue, darkCyan } from "./colors";

export const SLIDE_DATA = [
	{
		text: "Welcome to React Interview",
		color: deepSkyBlue
	},
	{
		text: "Test your knowledge",
		color: darkCyan
	},
	{
		text: "Swipe the flashcards to the left or to the right",
		color: deepSkyBlue
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
	},
	{
		label: "Image Url",
		placeholder: "image url",
		propName: "imageUrl",
		required: false
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