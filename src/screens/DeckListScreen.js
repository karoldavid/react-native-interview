import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import DeckList from "../components/DeckList";
import { styles } from "../utils/styles";

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
				<DeckList data={this.props.decks} onPress={() => this.props.navigation.navigate("deck")}/>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		decks: state.decks.list
	}
}

export default connect(mapStateToProps)(DeckListScreen);
