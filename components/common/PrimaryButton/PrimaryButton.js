import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, style, ...rest }) => (
  <View style={style}>
    <Text>{children}</Text>
  </View>
);

export default PrimaryButton;
const styles = StyleSheet.create({});
