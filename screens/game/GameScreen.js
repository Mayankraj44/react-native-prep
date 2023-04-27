import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../../components/common/NumberContainer/NumberContainer";
import Title from "../../components/common/Title/Title";
import { randomNumberGenerator } from "../../utils/utilities";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
import Card from "../../components/common/Card/Card";
import { COLOR } from "../../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ pickedNumber, makeGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(() =>
    randomNumberGenerator(minBoundary, maxBoundary, pickedNumber)
  );

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      makeGameOver();
    }
  }, [currentGuess, pickedNumber]);

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
      minBoundary = currentGuess + 1;
    }
    const newRndNum = randomNumberGenerator(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
  }

  return (
    <View>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.infoText}>Higher of lower </Text>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={buttonPressHandle.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
          <PrimaryButton onPress={buttonPressHandle.bind(this, "upper")}>
            <Ionicons name="md-add" size={24} />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  infoText: {
    color: COLOR.yellow500,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
});
