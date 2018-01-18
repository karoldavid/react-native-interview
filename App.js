import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { View } from "react-native";
import { MainNavigator } from "./src/utils/navigation";
import { styles } from "./src/utils/styles";
import { AppLoading, Font } from "expo";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  componentWillMount() {
    this._loadFontsAsync();
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      "Lato-Regular": require("./src/assets/fonts/Lato-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <MainNavigator />
          </View>
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
