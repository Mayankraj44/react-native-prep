import React from "react";
import { StyleSheet, View } from "react-native";
import { COLOR } from "../../../constants/COLOR";

const Card = ({ children, style, ...rest }) => (
  <View style={styles.inputContainer}>{children}</View>
);

export default Card;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLOR.primary500,
    borderRadius: 5,
    padding: 16,
    margin: 24,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
