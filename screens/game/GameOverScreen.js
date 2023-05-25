import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
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
}) => {
  const { width, height } = useWindowDimensions();
  const marginTopDimension = height < 400 ? 30 : 100;
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>

      <View
        style={[
          styles.imageContainer,
          {
            width: deviceWidth / 2,
            height: deviceWidth / 2,
            borderRadius: deviceWidth / 4,
          },
        ]}
      >
        <Image
          style={[styles.image, { marginTop: marginTopDimension }]}
          source={require("../../assets/images/game-over.png")}
        />
      </View>
      <Text style={styles.infoText}>
        Your Phone need <Text style={styles.highlight}>{guessCount}</Text>{" "}
        rounds to find
        <Text style={styles.highlight}> {pickedNumber}</Text>
      </Text>
      <PrimaryButton style={{ marginTop: 30 }} onPress={resetGame}>
        Start New game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: 300,
  },
  imageContainer: {
    margin: 10,
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
