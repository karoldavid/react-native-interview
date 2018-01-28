import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { View } from "react-native";
import { MainNavigator } from "./src/utils/navigation";
import { styles } from "./src/utils/styles";
import { AppLoading, Font } from "expo";
import firebase from "firebase";

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  componentWillMount() {
    this._loadFontsAsync();
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCA0x71-FOoMze7Y4ySiCOMw7lX8ZbNUYI",
      authDomain: "react-interview.firebaseapp.com",
      databaseURL: "https://react-interview.firebaseio.com",
      projectId: "react-interview",
      storageBucket: "react-interview.appspot.com",
      messagingSenderId: "472068862423"
    });
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
