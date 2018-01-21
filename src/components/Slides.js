import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../utils/styles";

class Slides extends Component {
	startButton() {
		return (
			<Button
				containerViewStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				title="Let's Start!"
				large
				raised
				onPress={this.props.onComplete}
			/>
		);
	}

	renderSlides() {
		const { data } = this.props;

		return data.map((slide, index) => {
			return (
				<View
					key={index}
					style={[
						styles.slideContainer,
						{ backgroundColor: slide.color }
					]}
				>
					<Text style={styles.slideText}>{slide.text}</Text>
					{index === data.length - 1 && this.startButton()}
				</View>
			);
		});
	}

	render() {
		const { data } = this.props;
		return (
			<ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

export default Slides;
