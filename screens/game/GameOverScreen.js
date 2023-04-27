import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../../components/common/Title/Title";

const GameOverScreen = ({ children, style, ...rest }) => (
  <View style={styles.rootContainer}>
    <Title>Game Over</Title>

    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/game-over.png")}
      />
    </View>
    <Text>Your Phone need X rounds to find Y</Text>
  </View>
);

export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
});
