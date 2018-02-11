import React, { Component } from "react";
import { connect } from "react-redux";
import {
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	View
} from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "../utils/styles";
import { blue, white } from "../utils/colors";
import Form from "../components/common/Form";
import * as actions from "../actions";
import { submit, validate } from "../utils/helpers";
import { DECK_FORM_INPUTS as FORM_INPUTS } from "../utils/consts";
import Button from "../components/common/Button";

class AddDeckScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Add A New Deck",
			visible: true,
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		};
	};

	onChange = (propName, value) => {
		this.props.updateDeck({ prop: propName, value });
	};

	render() {
		const { deck } = this.props;

		const errors = validate(deck, FORM_INPUTS);
		const submitForm = submit(deck, FORM_INPUTS, errors);

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<ScrollView>
						<Form
							data={deck}
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
									this.props.createDeck(deck, () => {
										this.props.navigation.navigate("decks");
									});
								}}
							/>
						</TouchableOpacity>
					</ScrollView>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const mapStateToProps = ({ deck }) => {
	return {
		deck
	};
};

export default connect(mapStateToProps, actions)(AddDeckScreen);
