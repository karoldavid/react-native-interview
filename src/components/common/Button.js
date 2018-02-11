import React from "react";
import { Button } from "react-native-elements";
import { blue } from "../../utils/colors";
import { styles } from "../../utils/styles";

export default ({
	title,
	icon,
	onPress,
	disabled = false,
	raised = false,
	textStyle = {}
}) => (
	<Button
		textStyle={textStyle}
		disabled={disabled}
		raised={raised}
		large
		icon={icon ? icon : null}
		backgroundColor={blue}
		fontFamily="Lato-Regular"
		buttonStyle={styles.buttonStyle}
		title={title}
		onPress={onPress}
	/>
);
