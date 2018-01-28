import React, { Component } from "react";
import { View } from "react-native";
import {
	FormLabel,
	FormInput,
	FormValidationMessage
} from "react-native-elements";
import { darkOrangishGray, suvaGray, lightSlateBlue } from "../../utils/colors";

class DeckForm extends Component {
	renderFormInput = ({ label, placeholder, propName, required }, index) => {
		const value = this.props.data[propName];
		const errors = this.props.errors;

		//console.log(errors);
		return (
			<View key={index}>
				<FormLabel
					labelStyle={{
						color: darkOrangishGray
					}}
				>
					{label}
				</FormLabel>

				<FormInput
					value={value}
					placeholder={placeholder}
					underlineColorAndroid={suvaGray}
					placeholderTextColor={lightSlateBlue}
					onChangeText={value => this.props.onChange(propName, value)}
				/>
				<FormValidationMessage>
					{errors.hasOwnProperty(propName) ? errors[propName] : "" }
				</FormValidationMessage>
			</View>
		);
	};

	render() {
		return (
			<View>
				{this.props.inputs.map((data, index) =>
					this.renderFormInput(data, index)
				)}
			</View>
		);
	}
}

export default DeckForm;
