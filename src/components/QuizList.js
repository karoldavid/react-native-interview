import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import QuizListItem from "./common/QuizListItem";
import { styles } from "../utils/styles";

const ITEM_HEIGHT = 100;

class QuizList extends Component {
	renderQuizListItem = ({ item }) => {
		return (
			<QuizListItem
				item={item}
				onPress={() => this.props.onPress(item)}
			/>
		);
	};

	getItemLayout = (data, index) => ({
		length: ITEM_HEIGHT,
		offset: ITEM_HEIGHT * index,
		index
	});

	renderSeparator = () => {
		return <View style={styles.listItemSeperator} />;
	};

	render() {
		return (
			<View style={styles.container}>
				<List containerStyle={{ marginTop: 0 }}>
					<FlatList
						data={this.props.data}
						initialNumToRender={10}
						getItemLayout={this.getItemLayout}
						renderItem={this.renderQuizListItem}
						keyExtractor={item => item.id}
						ItemSeparatorComponent={this.renderSeparator}
					/>
				</List>
			</View>
		);
	}
}

export default QuizList;