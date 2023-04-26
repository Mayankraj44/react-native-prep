import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../../components/common/NumberContainer/NumberContainer";
import Title from "../../components/common/Title/Title";
import { randomNumberGenerator } from "../../utils/utilities";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNumber, makeGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(() =>
    randomNumberGenerator(minBoundary, maxBoundary, pickedNumber)
  );
  function buttonPressHandle(direction) {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "upper" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Waring", "You know what the picked number is ", [
        { text: "Cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNum = randomNumberGenerator(
      minBoundary,
      maxBoundary,
      pickedNumber
    );
    setCurrentGuess(newRndNum);
  }
  useEffect(() => {
    if (currentGuess === pickedNumber) {
      console.log("guess it right");
      makeGameOver();
    }
  }, [currentGuess, pickedNumber]);
  return (
    <View>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher of lower </Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={buttonPressHandle.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={buttonPressHandle.bind(this, "upper")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  btnContainer: {},
});
