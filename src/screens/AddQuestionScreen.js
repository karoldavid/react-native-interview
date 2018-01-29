import React, { Component } from "react";
import { connect } from "react-redux";
import {
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	View
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { styles } from "../utils/styles";
import { blueMagenta } from "../utils/colors";
import Form from "../components/common/Form";
import * as actions from "../actions";
import { NavigationActions } from "react-navigation";
import { submit, validate } from "../utils/helpers";

class AddQuestionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Add A New Question",
			visible: true,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			}
		};
	};
	onChange = (propName, value) => {
		this.props.updateQuestion({ prop: propName, value });
	};

	render() {
		const FORM_INPUTS = [
			{
				label: "Question",
				placeholder: "question",
				propName: "question",
				required: true
			},
			{
				label: "Answer",
				placeholder: "answer",
				propName: "answer",
				required: true
			},
			{
				label: "source",
				placeholder: "source",
				propName: "source",
				required: false
			}
		];

		const { question, uid } = this.props;

		const errors = validate(question, FORM_INPUTS);
		const submitForm = submit(question, FORM_INPUTS, errors);

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<ScrollView>
						<Form
							data={question}
							errors={errors}
							inputs={FORM_INPUTS}
							onChange={this.onChange}
						/>
						<TouchableOpacity>
							<Button
								disabled={!submitForm}
								title="Submit"
								backgroundColor={blueMagenta}
								containerViewStyle={{
									marginTop: 15,
									marginBottom: 15
								}}
								icon={{ name: "send" }}
								onPress={() => {
									//this.props.saveQuestion(question);
									this.props.createQuestion(
										question,
										uid,
										() => {
											this.props.navigation.goBack();
										}
									);
								}}
							/>
						</TouchableOpacity>
					</ScrollView>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const mapStateToProps = ({ question, decks: { list, selected } }) => {
	const { uid } = list.find(deck => deck.title === selected.title);
	return {
		question,
		uid
	};
};

export default connect(mapStateToProps, actions)(AddQuestionScreen);
