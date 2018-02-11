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
import { blue, white } from "../utils/colors";
import Form from "../components/common/Form";
import * as actions from "../actions";
import { NavigationActions } from "react-navigation";
import { submit, validate } from "../utils/helpers";
import { QUESTION_FORM_INPUTS as FORM_INPUTS } from "../utils/consts";

class AddQuestionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Add Question",
			visible: true,
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		};
	};
	onChange = (propName, value) => {
		this.props.updateQuestion({ prop: propName, value });
	};

	render() {
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
								backgroundColor={blue}
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
