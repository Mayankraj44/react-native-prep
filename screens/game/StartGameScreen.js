import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
import { COLOR } from "../../constants/COLOR";
import Title from "../../components/common/Title/Title";
import Card from "../../components/common/Card/Card";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [number, setNumber] = useState("");
  function textChangeHandler(newNum) {
    setNumber(newNum);
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Not a Valid Number",
        "Please enter a number between 1 and 99 ",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    pickedNumberHandler(chosenNumber);
  }
  function resetInputHandler() {
    setNumber("");
  }

  return (
    <View>
      <Title>Guess my Number</Title>
      <Card>
        <View style={styles.textInputContainer}>
          <Text style={styles.instructionText}>Enter a number</Text>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={textChangeHandler}
            value={number}
          />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton btnStyle={styles.btn} onPress={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>

          <View style={styles.btn}>
            <PrimaryButton btnStyle={styles.btn} onPress={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
const styles = StyleSheet.create({
  instructionText: {
    color: "white",
    fontSize: 20,
  },
  textInputContainer: {
    alignItems: "center",
  },
  textInput: {
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.yellow500,
    color: COLOR.yellow500,
    fontSize: 30,
    marginVertical: 5,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  btn: {
    flex: 1,
  },
});
