import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { styles } from "../../utils/styles";

export default class QuizListItem extends PureComponent {
	state = {
		show: false
	};

	toggleShowAnswer = () => {
		this.setState({
			show: !this.state.show
		});
	};

	render() {
		const { question, answer, id } = this.props.item;

		return (
			<Card key={id} title={question}>
				<Button
					title={this.state.show ? "Hide Answer" : "Show Answer"}
					onPress={this.toggleShowAnswer}
				/>
				{this.state.show && (
					<View style={{ marginTop: 20 }}>
						<Text style={{ textAlign: "center" }}>{answer}</Text>
					</View>
				)}
			</Card>
		);
	}
}
