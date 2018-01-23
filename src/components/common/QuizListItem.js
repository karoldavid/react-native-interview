import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { styles } from "../../utils/styles";

export default class QuizListItem extends PureComponent {
	render() {
		const { question, id } = this.props.item;

		return (
			<Card key={id} title={question}>
				<Button />
				<View style={{ marginTop: 20, marginBottom: 20 }}>
					<Text style={{ textAlign: "center" }}>
						Know the Answer?
					</Text>
				</View>
				<View style={styles.detailWrapper}>
					<Text>No, swipe left.</Text>
					<Text>Yes, swipe right.</Text>
				</View>
			</Card>
		);
	}
}
