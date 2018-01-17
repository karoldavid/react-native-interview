import { Dimensions, StyleSheet } from "react-native";

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
	}
});
