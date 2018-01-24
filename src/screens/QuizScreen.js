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
	state = {
		show: false
	};
	static navigationOptions = ({ navigation }) => {
		return {
			title: `Quiz ${navigation.state.params.title}`,
			visible: true,
			headerLeft: null,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			}
		};
	};

	toggleAnswer = () => {
		this.setState(previousState => {
			return {
				show: !previousState.show
			};
		});
	};

	renderCard = (item, show = false) => {
		const { question, answer, id } = item;

		return (
			<Card key={id} title={question}>
				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<Text style={{ textAlign: "center" }}>
						Know the Answer?
					</Text>
				</View>
				<View style={styles.detailWrapper}>
					<Text>No, swipe left.</Text>
					<Text>Yes, swipe right.</Text>
				</View>
				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<Button
						title={
							this.state.show && show
								? "Hide Answer"
								: "Show Answer"
						}
						onPress={this.toggleAnswer}
					/>
				</View>
				{this.state.show &&
					show && (
						<View style={{ marginTop: 10, marginBottom: 10 }}>
							<Text style={{ textAlign: "center" }}>
								{answer}
							</Text>
						</View>
					)}
			</Card>
		);
	};

	renderNoMoreCards = () => {
		const percentCorrect = () => {
			const { know, questions } = this.props;
			return know.length / questions.length * 100;
		};
		return (
			<Card title="Questions Answered Correctly">
				<View style={{ marginTop: 20, marginBottom: 30 }}>
					<Text
						style={{ textAlign: "center", fontSize: 50 }}
					>{`${percentCorrect()} %`}</Text>
				</View>
				<Button
					containerViewStyle={{ marginBottom: 20 }}
					large
					title="Restart Quiz"
					icon={{ name: "done" }}
					backgroundColor={deepSkyBlue}
					onPress={() => { this.props.navigation.goBack()
						this.props.resetQuiz()
					}}
				/>
				<Button
					large
					title="Back to Decks"
					icon={{ name: "done" }}
					backgroundColor={deepSkyBlue}
					onPress={() => { 
						this.props.navigation.navigate("decks")
						this.props.resetQuiz()
					}}
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
					onSwipeRight={question => {
						this.setState({ show: false });
						this.props.sortAnswer({
							prop: "know",
							value: question
						});
					}}
					onSwipeLeft={question => {
						this.setState({ show: false });
						this.props.sortAnswer({
							prop: "dontKnow",
							value: question
						});
					}}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({
	decks: { list, selected },
	quiz: { answered, know }
}) => {
	const { questions, title } = list.find(
		deck => deck.title === selected.title
	);

	return {
		questions,
		title,
		answered,
		know
	};
};

export default connect(mapStateToProps, actions)(QuizScreen);
