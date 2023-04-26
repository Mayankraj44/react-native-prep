import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLOR } from "../../../constants/COLOR";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: COLOR.yellow500,
    textAlign: "center",
    padding: 10,
    color: "white",
    fontWeight: "bold",
  },
});
