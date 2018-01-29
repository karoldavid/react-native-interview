import { Dimensions, StyleSheet } from "react-native";
import { pacificBlue } from "./colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	listItemSeperator: {
		height: 1,
		width: "86%",
		backgroundColor: "#CED0CE",
		marginLeft: "14%"
	},
	listItemContainer: {
		borderBottomWidth: 0,
		width: Dimensions.get("window").width
	},
	iconButton: {
		paddingLeft: 20,
		paddingRight: 20
	},
	slideContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: Dimensions.get("window").width
	},
	slideText: {
		fontSize: 30,
		textAlign: "center",
		color: "white"
	},
	buttonContainer: {
		marginTop: 15
	},
	button: {
		backgroundColor: pacificBlue
	},
	quizContainer: {
		marginTop: 10,
		flex: 1,
		backgroundColor: "#fff"
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
		bottom: 0,
		right: 0
	}
});
