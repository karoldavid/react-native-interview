import { Dimensions, StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "./consts";
import { blue, veryLightGray, white } from "./colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	listItemSeperator: {
		height: 1,
		width: "86%",
		backgroundColor: veryLightGray,
		marginLeft: "14%"
	},
	listItemContainer: {
		borderBottomWidth: 0,
		width: SCREEN_WIDTH
	},
	iconButton: {
		paddingLeft: 20,
		paddingRight: 20
	},
	slideContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: SCREEN_WIDTH
	},
	slideText: {
		fontSize: 30,
		textAlign: "center",
		color: white
	},
	buttonContainer: {
		marginTop: 15
	},
	button: {
		backgroundColor: blue
	},
	buttonStyle: {
		borderRadius: 0,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 20
	},
	quizContainer: {
		marginTop: 10,
		flex: 1,
		backgroundColor: white
	},
	detailWrapper: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 10
	},
	iconButton: {
		paddingLeft: 20,
		paddingRight: 20
	},
	overlay: {
		position: "absolute",
		bottom: 20,
		right: 0
	},
	cardStyle: {
		position: "absolute",
		width: SCREEN_WIDTH
	}
});
