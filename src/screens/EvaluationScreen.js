import React, { Component } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = ({ quiz: { know, dontKnow } }) => {
	console.log(dontKnow)
	return {
		know,
		dontKnow
	};
};

export default connect(mapStateToProps)(EvaluationScreen);
