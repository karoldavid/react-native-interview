import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import DeckList from "../components/DeckList";
import { styles } from "../utils/styles";
import * as actions from "../actions";
import { IconButton } from "../components/common";
import { blueMagenta, white } from "../utils/colors";

class DeckListScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Decks",
			visible: true,
			headerLeft: null,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			},
			headerRight: (
				<IconButton
					onPress={() => navigation.navigate("addDeck")}
					ionicon="md-add-circle"
					size={30}
					color={white}
				/>
			)
		};
	};

	componentWillMount() {
		this.props.decksFetch();
	}

	onPress = item => {
		this.props.selectDeck(item);
		this.props.navigation.navigate("deck");
	};

	render() {
		const { decks, loading } = this.props;

		return (
			<View style={styles.container}>
				{loading ? (
					<ActivityIndicator size="large" color={blueMagenta} />
				) : (
					<DeckList data={decks} onPress={this.onPress} />
				)}
			</View>
		);
	}
}

const mapStateToProps = ({ decks: { list, loading } }) => {
	return {
		decks: list,
		loading
	};
};

export default connect(mapStateToProps, actions)(DeckListScreen);