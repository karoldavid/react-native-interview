import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";
import QuizList from "../components/QuizList";

class DontKnowScreen extends Component {
	onPress = item => {
		console.log("Dont Know Item");
	};

	render() {
		return <QuizList data={this.props.dontKnow} onPress={this.onPress} />;
	}
}

const mapStateToProps = ({ quiz: { dontKnow } }) => {
	return {
		dontKnow
	};
};

export default connect (mapStateToProps)(DontKnowScreen);
