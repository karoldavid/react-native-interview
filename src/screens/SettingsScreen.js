import React, { Component } from "react";
import { Alert, AsyncStorage, View } from "react-native";
import { styles } from "../utils/styles";
import { lightGray, white } from "../utils/colors";
import Button from "../components/common/Button";

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
					textStyle={{ color: this.state.cleared ? lightGray : white }}
					title="Clear Local Storage"
					large
					raised={true}
					onPress={this.clearAsyncStorage}
				/>
			</View>
		);
	}
}

export default SettingsScreen;
