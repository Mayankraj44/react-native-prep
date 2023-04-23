import React from "react";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./StartGameScreen";

const GameRenderer = () => (
  <View style={styles.container}>
    <StartGameScreen />
  </View>
);

export default GameRenderer;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
