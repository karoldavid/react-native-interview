import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import DeckList from "../components/DeckList";
import { styles } from "../utils/styles";
import * as actions from "../actions";
import { IconButton } from "../components/common";
import { blue, white } from "../utils/colors";

class DeckListScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Decks",
			visible: true,
			headerLeft: null,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			}
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
		const { decks, loading, navigation } = this.props;

		return (
			<View style={styles.container}>
				{loading ? (
					<ActivityIndicator size="large" color={blue} />
				) : (
					<DeckList data={decks} onPress={this.onPress} />
				)}
				<View style={styles.overlay}>
					<IconButton
						ionicon="md-add-circle"
						size={50}
						color={blue}
						onPress={() => navigation.navigate("addDeck")}
					/>
				</View>
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
