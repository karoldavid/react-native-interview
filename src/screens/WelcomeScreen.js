import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { styles } from "../utils/styles";
import { SLIDE_DATA } from "../utils/consts";
import Slides from "../components/Slides";

class WelcomeScreen extends Component {
	componentWillMount() {
		this._goToWelcomeScreen();
	}

	navigate = () => {
		const { questions, title } = this.props.quiz;

		if (questions.length === 0) {
			this.props.navigation.navigate("decks");
		} else {
			this.props.navigation.navigate("quiz", { title });
		}
	};

	async _goToWelcomeScreen() {
		let visited = await AsyncStorage.getItem("visited");

		if (visited) {
			this.navigate();
		} else {
			AsyncStorage.setItem("visited", JSON.stringify({ visited: true }));
		}
	}

	onSlidesComplete = () => {
		this.navigate();
	};

	render() {
		return (
			<View style={styles.container}>
				<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
			</View>
		);
	}
}

const mapStateToProps = ({ quiz }) => {
	return {
		quiz
	};
};

export default connect(mapStateToProps)(WelcomeScreen);
