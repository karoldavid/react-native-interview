import React, { Component } from "react";
import { Alert, AsyncStorage, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../utils/styles";
import { lightGray, white } from "../utils/colors";

class SettingsScreen extends Component {
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
				<Button
					containerViewStyle={styles.buttonContainer}
					buttonStyle={styles.button}
					textStyle={{ color: this.state.cleared ? lightGray : white }}
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
