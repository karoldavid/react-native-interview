import React, { Component } from "react";
import { View } from "react-native";
import DeckList from "../components/DeckList";
import { styles } from "../utils/styles";
import data from "../data/data.json";

class DeckScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<DeckList data={data} />
			</View>
		);
	}
}

export default DeckScreen;
