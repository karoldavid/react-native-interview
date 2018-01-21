import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";

class QuizScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Quiz",
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
				<Text>QuizScreen</Text>
			</View>
		);
	}
}

export default QuizScreen;
