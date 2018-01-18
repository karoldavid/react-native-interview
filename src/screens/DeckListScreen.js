import React, { Component } from "react";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import DeckList from "../components/DeckList";
import { styles } from "../utils/styles";
import data from "../data/data.json";

class DeckListScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
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
				<DeckList data={data} onPress={() => this.props.navigation.navigate("deck")}/>
			</View>
		);
	}
}

export default DeckListScreen;
