import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "../utils/styles";
import Button from "../components/common/Button";

class Slides extends Component {
	startButton() {
		return (
			<Button
				title="Let's Start!"
				raised={true}
				onPress={this.props.onComplete}
				buttonStyle={{ marginTop: 0 }}
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
		return (
			<ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

export default Slides;
