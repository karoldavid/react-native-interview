import React, { Component } from "react";
import { Alert, AsyncStorage, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../utils/styles";

class SettingsScreen extends Component {
	clearAsyncStorage = async () => {
		await AsyncStorage.clear();
		Alert.alert("", "Local Storage Cleared", [
			{
				text: "OK",
				onPress: () => this.props.navigation.navigate("decks")
			}
		]);
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					containerViewStyle={styles.buttonContainer}
					buttonStyle={styles.button}
					title="Clear Local Storage"
					large
					raised
					onPress={this.clearAsyncStorage}
				/>
			</View>
		);
	}
}

export default SettingsScreen;
