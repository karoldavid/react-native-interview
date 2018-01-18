import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { View } from "react-native";
import { MainNavigator } from "./src/utils/navigation";
import { styles } from "./src/utils/styles";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
