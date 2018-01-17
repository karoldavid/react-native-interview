import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class DeckScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>DeckScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default DeckScreen;