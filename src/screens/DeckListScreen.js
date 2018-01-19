import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import DeckList from "../components/DeckList";
import { styles } from "../utils/styles";
import * as actions from "../actions";

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

	onPress = (item) => {
		this.props.selectDeck(item)
		this.props.navigation.navigate("deck");
	};

	render() {
		return (
			<View style={styles.container}>
				<DeckList data={this.props.decks} onPress={this.onPress} />
			</View>
		);
	}
}

const mapStateToProps = ({ decks: { list } }) => {
	return {
		decks: list
	};
};

export default connect(mapStateToProps, actions)(DeckListScreen);
