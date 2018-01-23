import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";
import QuizList from "../components/QuizList";

class KnowScreen extends Component {
	onPress = item => {
		console.log("Quiz List Item")
	};

	render() {
		return (
			<View style={styles.container}>
				<QuizList data={this.props.know} onPress={this.onPress}/>
			</View>
		);
	}
}

const mapStateToProps = ({ quiz: { know } }) => {
	return {
		know
	};
};

export default connect(mapStateToProps)(KnowScreen);
