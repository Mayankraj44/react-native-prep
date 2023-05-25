import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import StartGameScreen from "./StartGameScreen";
import GameScreen from "./GameScreen";
import { SafeAreaView } from "react-native";
import { COLOR } from "../../constants/COLOR";
import GameOverScreen from "./GameOverScreen";

const GameRenderer = () => {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { width, height } = useWindowDimensions();
  const marginTopDimension = height < 400 ? 30 : 100;
  function pickedNumberHandler(number) {
    setPickedNumber(number);
  }
  function makeGameOver() {
    setGameOver(true);
  }
  function increaseGuessCount() {
    setGuessCount((p) => p + 1);
  }
  function resetGame() {
    setGameOver(false);
    setGuessCount(0);
    setPickedNumber(null);
  }
  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
  if (pickedNumber) {
    screen = (
      <GameScreen
        pickedNumber={pickedNumber}
        makeGameOver={makeGameOver}
        increaseGuessCount={increaseGuessCount}
      />
    );
  }
  if (pickedNumber && gameOver) {
    screen = (
      <GameOverScreen
        pickedNumber={pickedNumber}
        guessCount={guessCount}
        resetGame={resetGame}
      />
    );
  }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <LinearGradient
        colors={[COLOR.primary400, COLOR.yellow500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        >
          <View style={[styles.root, { marginTop: marginTopDimension }]}>
            <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
          </View>
        </ImageBackground>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default GameRenderer;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  root: {
    flex: 1,
    margin: 16,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.yellow500,
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.5,
  },
});
