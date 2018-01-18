import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MainNavigator } from "./src/utils/navigation";
import { styles } from "./src/utils/styles";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
