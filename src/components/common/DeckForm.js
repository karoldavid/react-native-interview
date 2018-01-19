import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import { darkOrangishGray, suvaGray, lightSlateBlue } from "../../utils/colors";

class DeckForm extends Component {
	renderFormInput = ({ label, placeholder, propName }, index) => {
		const value = this.props.data[propName];
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
