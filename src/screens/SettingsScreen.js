import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastAndroid, AsyncStorage, View } from "react-native";
import { styles } from "../utils/styles";
import { lightGray, white } from "../utils/colors";
import Button from "../components/common/Button";
import * as actions from "../actions";

class SettingsScreen extends Component {
	state = {
		cleared: false
	};

	clearAsyncStorage = async () => {
		await AsyncStorage.clear();

		this.setState({ cleared: true });

		ToastAndroid.showWithGravityAndOffset(
			"Local Storage Cleared",
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM,
			25,
			50
		);
		this.props.navigation.navigate("decks");
		this.props.resetQuiz();
	};

	render() {
		return (
			<View style={styles.container}>
				<Button
					textStyle={{
						color: this.state.cleared ? lightGray : white
					}}
					icon={{ name: "storage" }}
					title="Clear Local Storage"
					raised={true}
					onPress={this.clearAsyncStorage}
					buttonStyle={{ marginTop: 0 }}
				/>
			</View>
		);
	}
}

export default connect(null, actions)(SettingsScreen);
