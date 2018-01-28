import React, { PureComponent } from "react";
import { ListItem } from "react-native-elements";
import { styles } from "../../utils/styles";

export default class Item extends PureComponent {
	render() {
		const { title, questions } = this.props.item;

		return (
			<ListItem
				roundAvatar
				keyExtractor={title}
				title={title}
				subtitle={`${questions ? questions.length : 0} Questions`}
				avatar={require("../../img/react.png")}
				onPress={this.props.onPress}
				containerStyle={styles.listItemContainer}
			/>
		);
	}
}
