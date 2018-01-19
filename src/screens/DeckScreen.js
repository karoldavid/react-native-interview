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
					onPress={() => console.log("Icon Pressed")}
					ionicon="md-add-circle"
					size={30}
					color={white}
				/>
			)
		};
	};
	render() {
		const { title, questions } = this.props.selected;
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

const mapStateToProps = ({ decks: { selected } }) => {
	return {
		selected
	};
};

export default connect(mapStateToProps)(DeckScreen);
