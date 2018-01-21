import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import { styles } from "../utils/styles";
import { SLIDE_DATA } from "../utils/consts";
import Slides from "../components/Slides";

class WelcomeScreen extends Component {
	componentWillMount() {
		this._goToWelcomeScreen();
	}

	async _goToWelcomeScreen() {
		let visited = await AsyncStorage.getItem("visited");

		if (visited) {
			this.props.navigation.navigate("decks");
		} else {
			AsyncStorage.setItem("visited", JSON.stringify({ visited: true }));
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate("decks");
	};

	render() {
		return (
			<View style={styles.container}>
				<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
			</View>
		);
	}
}

export default WelcomeScreen;
