import React, { Component } from "react";
import { connect } from "react-redux";
import {
	StyleSheet,
	View,
	Text,
	Image,
	Platform,
	Dimensions,
	Linking
} from "react-native";
import { Bar } from "react-native-progress";
import { styles } from "../utils/styles";
import Swipe from "../components/Swipe";
import { Button, Card, Icon } from "react-native-elements";
import * as actions from "../actions";
import { blue, red, white } from "../utils/colors";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

class QuizScreen extends Component {
	state = {
		show: false,
		index: 0
	};
	static navigationOptions = ({ navigation }) => {
		return {
			title: `Quiz ${navigation.state.params.title}`,
			visible: true,
			headerLeft: null,
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
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

	goToSource = source => {
		Linking.openURL(source);
	};

	renderCard = (item, show = false) => {
		const { question, answer, uid, source } = item;

		return (
			<Card key={uid} title={question}>
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
						large
						backgroundColor={blue}
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
							{source.length > 0 ? (
								<Text
									style={{
										textAlign: "center",
										marginTop: 10,
										color: blue
									}}
									onPress={() => this.goToSource(source)}
								>
									Source
								</Text>
							) : (
								<Text
									style={{
										textAlign: "center",
										marginTop: 10,
										color: red
									}}
								>
									Source Unknown
								</Text>
							)}
						</View>
					)}
			</Card>
		);
	};

	renderNoMoreCards = () => {
		const { title } = this.props;
		const percentCorrect = () => {
			const { know, questions } = this.props;
			return questions.length > 0
				? know.length / questions.length * 100
				: 0;
		};
		return (
			<Card title="Correct Answers">
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
					backgroundColor={blue}
					onPress={() => {
						this.props.restartQuiz();
					}}
				/>
				<Button
					large
					title="Back to Decks"
					icon={{ name: "done" }}
					backgroundColor={blue}
					onPress={() => {
						this.props.navigation.navigate("decks");
						this.props.resetQuiz();
					}}
				/>
			</Card>
		);
	};

	render() {
		const { questions, answered, index } = this.props;
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
					keyProp="uid"
					index={index}
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
	quiz: { questions, title, answered, know, index }
}) => {
	return {
		questions,
		title,
		answered,
		know,
		index
	};
};

export default connect(mapStateToProps, actions)(QuizScreen);