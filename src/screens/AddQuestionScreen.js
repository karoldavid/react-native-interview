import React, { Component } from "react";
import { connect } from "react-redux";
import {
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	View,
	ToastAndroid
} from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "../utils/styles";
import { blue, white } from "../utils/colors";
import Form from "../components/common/Form";
import * as actions from "../actions";
import { NavigationActions } from "react-navigation";
import { submit, validate } from "../utils/helpers";
import { QUESTION_FORM_INPUTS as FORM_INPUTS } from "../utils/consts";
import Button from "../components/common/Button";

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
								icon={{ name: "send" }}
								onPress={() => {
									this.props.createQuestion(
										question,
										uid,
										() => {
											ToastAndroid.showWithGravityAndOffset(
												"Question successfully added to database",
												ToastAndroid.LONG,
												ToastAndroid.BOTTOM,
												25,
												50
											);
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
