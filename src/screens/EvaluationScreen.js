import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";

class EvaluationScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Evaluation",
			visible: true,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			},
			headerLeft: null
		};
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>Evaluation Screen</Text>
			</View>
		);
	}
}

export default EvaluationScreen;
