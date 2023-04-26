import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLOR } from "../../../constants/COLOR";
import { View } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guess}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const styles = StyleSheet.create({
  guessContainer: {
    alignItems: "center",
  },
  guess: {
    color: COLOR.yellow500,
    textAlign: "center",
    fontSize: 24,
    padding: 16,
    borderWidth: 3,
    borderColor: COLOR.yellow500,
    marginTop: 16,
    width: "60%",
    borderRadius: 5,
  },
});
