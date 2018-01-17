import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckScreen from "./src/screens/DeckScreen";

export default class App extends Component {
  render() {
    return (
     <DeckScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
