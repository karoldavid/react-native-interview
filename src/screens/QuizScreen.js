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
import { Card, Icon } from "react-native-elements";
import * as actions from "../actions";
import { blue, red, white } from "../utils/colors";
import Button from "../components/common/Button";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/consts";

class QuizScreen extends Component {
	state = {
		show: false,
		index: 0
	};
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.state.params.title,
			visible: true,
			headerLeft: null,
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			},
			headerTitleStyle: { textAlign: "center", alignSelf: "center" },
			tabBarLabel: "Quiz"
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
			<Card
				key={uid}
				titleNumberOfLines={3}
				title={question}
				titleStyle={{ height: 50, fontSize: 14 }}
			>
				<View style={{ marginBottom: 10 }}>
					<Text style={{ textAlign: "center", fontSize: 14 }}>
						Know the Answer?
					</Text>
				</View>
				<View style={styles.detailWrapper}>
					<Text>No, swipe left.</Text>
					<Text>Yes, swipe right.</Text>
				</View>
				<View>
					<Button
						title={
							this.state.show && show
								? "Hide Answer"
								: "Show Answer"
						}
						onPress={this.toggleAnswer}
						buttonStyle={{ marginTop: 0 }}
					/>
				</View>
				{this.state.show &&
					show && (
						<View style={{ marginTop: 10, marginBottom: 10 }}>
							<Text style={{ textAlign: "center", fontSize: 14 }}>
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
				? (know.length / questions.length * 100).toFixed(0)
				: 0;
		};
		return (
			<Card
				containerStyle={{ flex: 1, marginBottom: 10 }}
				title="Correct Answers"
				titleStyle={{ fontSize: 18 }}
			>
				<View style={{ marginTop: 20, marginBottom: 20 }}>
					<Text
						style={{ textAlign: "center", fontSize: 40 }}
					>{`${percentCorrect()}%`}</Text>
				</View>
				<Button
					title="Restart Quiz"
					icon={{ name: "redo" }}
					onPress={() => {
						this.props.restartQuiz();
					}}
				/>
				<Button
					title="Back to Decks"
					icon={{ name: "arrow-back" }}
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
				<View
					style={{
						alignItems: "center",
						marginTop: 10
					}}
				>
					<Bar progress={getProgress()} width={SCREEN_WIDTH * 0.95} />
				</View>
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
