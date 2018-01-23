import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../utils/styles";

class SummaryScreen extends Component {
	state = {
		cleared: false
	};

	clearAsyncStorage = async () => {
		await AsyncStorage.clear();

		this.setState({ cleared: true });

		Alert.alert("", "Local Storage Cleared", [
			{
				text: "OK",
				onPress: () => this.props.navigation.navigate("decks")
			}
		]);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>SummaryScreen</Text>
			</View>
		);
	}
}

export default SummaryScreen;
