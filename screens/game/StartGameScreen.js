import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";

const StartGameScreen = ({ params }) => (
  <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} placeholder="Enter a Number" />
    <PrimaryButton style>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>
  </View>
);

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#7d063c",
    borderRadius: 5,
    padding: 16,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#1b1a1a",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
