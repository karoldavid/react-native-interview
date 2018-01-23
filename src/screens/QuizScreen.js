import React, { Component } from "react";
import { connect } from "react-redux";
import {
	StyleSheet,
	View,
	Text,
	Image,
	Platform,
	Dimensions
} from "react-native";
import { Bar } from "react-native-progress";
import { styles } from "../utils/styles";
import Swipe from "../components/Swipe";
import { Button, Card, Icon } from "react-native-elements";
import * as actions from "../actions";
import { deepSkyBlue } from "../utils/colors";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

class QuizScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Quiz",
			visible: true,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			}
		};
	};

	renderCard(item) {
		const { question, answer, id } = item;

		return (
			<Card key={id} title={question}>
				<View style={{ marginTop: 20, marginBottom: 20 }}>
					<Text style={{ textAlign: "center" }}>
						Know the Answer?
					</Text>
				</View>
				<View style={styles.detailWrapper}>
					<Text>No, swipe left.</Text>
					<Text>Yes, swipe right.</Text>
				</View>
			</Card>
		);
	}

	renderNoMoreCards = () => {
		return (
			<Card title="No more questions">
				<Button
					large
					title="Go to self evaluation"
					icon={{ name: "done" }}
					backgroundColor={deepSkyBlue}
					onPress={() => this.props.navigation.navigate("evaluation")}
				/>
			</Card>
		);
	};

	render() {
		const { questions, answered } = this.props;
		const getProgress = () => {
			return answered * (100 / questions.length) / 100;
		};
		return (
			<View style={styles.quizContainer}>
				<Bar
					progress={getProgress()}
					width={Dimensions.get("window").width}
				/>

				<Swipe
					data={questions}
					renderCard={this.renderCard}
					renderNoMoreCards={this.renderNoMoreCards}
					keyProp="id"
					onSwipeRight={question =>
						this.props.sortAnswer({ prop: "know", value: question })
					}
					onSwipeLeft={question =>
						this.props.sortAnswer({
							prop: "dontKnow",
							value: question
						})
					}
				/>

				<Card title="Instructions">
					<Text style={{ textAlign: "center" }}>
						Use pen and paper. If you know the answer, write it down
						and swipe right Otherwise, write down the question.
						Then, swipe left.
					</Text>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = ({ decks: { list, selected }, quiz: { answered } }) => {
	const { questions, title } = list.find(
		deck => deck.title === selected.title
	);

	return {
		questions,
		title,
		answered
	};
};

export default connect(mapStateToProps, actions)(QuizScreen);
