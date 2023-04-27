import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Title from "../../components/common/Title/Title";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
import { COLOR } from "../../constants/COLOR";

const GameOverScreen = ({
  children,
  style,
  pickedNumber,
  guessCount,
  resetGame,
  ...rest
}) => (
  <View style={styles.rootContainer}>
    <Title>Game Over</Title>

    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/game-over.png")}
      />
    </View>
    <Text style={styles.infoText}>
      Your Phone need <Text style={styles.highlight}>{guessCount}</Text> rounds
      to find
      <Text style={styles.highlight}> {pickedNumber}</Text>
    </Text>
    <PrimaryButton style={{ marginTop: 30 }} onPress={resetGame}>
      Start New game
    </PrimaryButton>
  </View>
);

export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: 300,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    margin: 10,
    marginTop: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoText: {
    fontSize: 20,
  },
  highlight: {
    color: "white",
  },
});
