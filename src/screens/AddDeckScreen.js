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

class AddDeckScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Add A New Deck",
			visible: true,
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: "blue"
			}
		};
	};

	onChange = (propName, value) => {
		this.props.updateDeck({ prop: propName, value });
	};

	render() {
		const FORM_INPUTS = [
			{
				label: "Deck Title",
				placeholder: "deck title",
				propName: "title",
				required: true
			},
			{
				label: "Image Url",
				placeholder: "image url",
				propName: "imageUrl",
				required: false
			}
		];

		const { deck } = this.props;

		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<ScrollView>
						<Form
							data={deck}
							inputs={FORM_INPUTS}
							onChange={this.onChange}
						/>
						<TouchableOpacity>
							<Button
								title="Submit"
								backgroundColor={blueMagenta}
								containerViewStyle={{
									marginTop: 15,
									marginBottom: 15
								}}
								icon={{ name: "send" }}
								onPress={() => {
									this.props.saveDeck(deck);
									this.props.navigation.navigate("decks");
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
