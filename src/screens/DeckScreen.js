import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { styles } from "../utils/styles";
import { white } from "../utils/colors";
import { IconButton } from "../components/common";

class DeckScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Deck View",
			visible: true,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			},
			headerRight: (
				<IconButton
					onPress={() => navigation.navigate("addQuestion")}
					ionicon="md-add-circle"
					size={30}
					color={white}
				/>
			)
		};
	};
	render() {
		const { questions, title } = this.props;
		return (
			<View style={styles.container}>
				<Card title={title} image={require("../img/react.png")}>
					<Text style={{ marginBottom: 10, textAlign: "center" }}>
						{`${questions.length} Questions`}
					</Text>
					<Button
						icon={{ name: "code" }}
						backgroundColor="#03A9F4"
						fontFamily="Lato-Regular"
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0
						}}
						title="Start Quiz"
					/>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = ({ decks: { list, selected } }) => {
	const { questions, title } = list.find(
		deck => deck.title === selected.title
	);
	return {
		questions,
		title
	};
};

export default connect(mapStateToProps)(DeckScreen);
