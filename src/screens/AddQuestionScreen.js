import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";

class AddQuestionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Add A New Question",
			visible: true,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			}
		};
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>AddQuestionScreen</Text>
			</View>
		);
	}
}

export default AddQuestionScreen;
