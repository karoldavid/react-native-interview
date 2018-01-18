import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { styles } from "../utils/styles";

class DeckScreen extends Component {
	render() {
		const { title, questions } = this.props.selected;
		return (
			<View style={styles.container}>
				<Card title={title} image={require("../img/react.png")}>
					<Text style={{ marginBottom: 10, textAlign: "center" }}>
						{`${questions.length} Questions`}
					</Text>
					<Button
						icon={{ name: "code" }}
						backgroundColor="#03A9F4"
						fontFamily="Lato-Regular"
						buttonStyle={{
							borderRadius: 0,
							marginLeft: 0,
							marginRight: 0,
							marginBottom: 0
						}}
						title="Start Quiz"
					/>
				</Card>
			</View>
		);
	}
}

const mapStateToProps = ({ decks: { selected } }) => {
	return {
		selected
	};
};

export default connect(mapStateToProps)(DeckScreen);
