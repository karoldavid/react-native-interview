import React, { Component } from "react";
import {
	View,
	Animated,
	PanResponder,
	LayoutAnimation,
	UIManager
} from "react-native";

import { styles } from "../utils/styles";
import {
	SCREEN_WIDTH,
	SWIPE_THRESHOLD,
	SWIPE_OUT_DURATION
} from "../utils/consts";

class Swipe extends Component {
	static defaultProps = {
		onSwipeRight: () => {},
		onSwipeLeft: () => {},
		keyProp: "id"
	};

	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx, y: gesture.dy });
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					this.forceSwipe("right");
				} else if (gesture.dx < -SWIPE_THRESHOLD)
					this.forceSwipe("left");
				else {
					this.resetPosition();
				}
			}
		});

		this.state = {
			panResponder,
			position
		};
	}

	componentWillUpdate() {
		UIManager.setLayoutAnimationEnabledExperimental &&
			UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	forceSwipe(direction) {
		const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
		Animated.timing(this.state.position, {
			toValue: { x, y: 0 },
			duration: SWIPE_OUT_DURATION
		}).start(() => this.onSwipeComplete(direction));
	}

	onSwipeComplete(direction) {
		const { onSwipeLeft, onSwipeRight, data, index } = this.props;
		const item = data[index];

		direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
		this.state.position.setValue({ x: 0, y: 0 });
	}

	resetPosition() {
		Animated.spring(this.state.position, {
			toValue: { x: 0, y: 0 }
		}).start();
	}

	getCardStyle() {
		const { position } = this.state;
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ["-120deg", "0deg", "120deg"]
		});

		return {
			...position.getLayout(),
			transform: [{ rotate }]
		};
	}

	renderCards() {
		const { index, data, keyProp } = this.props;
		if (index >= data.length) return this.props.renderNoMoreCards();
		const deck = data.map((item, i) => {
			if (i < index) return null;
			if (i === index) {
				return (
					<Animated.View
						key={item[keyProp]}
						style={[
							this.getCardStyle(),
							styles.card,
							{ zIndex: 99 }
						]}
						{...this.state.panResponder.panHandlers}
					>
						{this.props.renderCard(item, true)}
					</Animated.View>
				);
			}
			return (
				<Animated.View
					key={item[keyProp]}
					style={[styles.card, { top: 10 * (i - index), zIndex: -i }]}
				>
					{this.props.renderCard(item)}
				</Animated.View>
			);
		});

		return deck;
	}

	render() {
		return <View style={{ flex: 1 }}>{this.renderCards()}</View>;
	}
}

export default Swipe;
