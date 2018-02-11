import React, { Component } from "react";
import { connect } from "react-redux";
import { Dimensions, Text, View } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { styles } from "../utils/styles";
import { blue, white } from "../utils/colors";
import { IconButton } from "../components/common";
import * as actions from "../actions";

class DeckScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Deck",
			visible: true,
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			},
			headerRight: (
				<Text
					onPress={() => navigation.navigate("addQuestion")}
					style={{ color: white, paddingRight: 20 }}
				>Add Question</Text>
			)
		};
	};
	render() {
		const { questions, title } = this.props;
		return (
			<View style={styles.container}>
				<Card
					title={title}
					titleStyle={{ fontSize: 30, fontFamily: "Lato-Regular" }}
					featuredTitle={`${questions.length} ${
						questions.length === 1 ? "Question" : "Questions"
					}`}
					featuredTitleStyle={{
						fontSize: 20,
						fontFamily: "Lato-Regular"
					}}
					image={require("../img/react.png")}
					containerStyle={{
						flex: 1,
						width: Dimensions.get("window").width * 0.95,
						marginBottom: 20
					}}
				>
					{questions.length > 0 ? (
						<Button
							large
							icon={{ name: "code" }}
							backgroundColor={blue}
							fontFamily="Lato-Regular"
							buttonStyle={{
								borderRadius: 0,
								marginLeft: 0,
								marginRight: 0,
								marginTop: 20
							}}
							title="Start Quiz"
							onPress={() => {
								this.props.selectQuiz({ questions, title });
								this.props.navigation.navigate("quiz", {
									title
								});
							}}
						/>
					) : (
						<Text
							style={{
								textAlign: "center",
								marginTop: 20,
								fontFamily: "Lato-Regular",
								fontSize: 20
							}}
						>
							{`Add a question to this deck before you can start the ${
								title
							} quiz.`}
						</Text>
					)}
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

export default connect(mapStateToProps, actions)(DeckScreen);
