import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../../constants/COLOR";

const PrimaryButton = ({ children, style, onPress, ...rest }) => {
  return (
    <View style={[styles.buttonOuter, style]}>
      <Pressable
        style={styles.buttonInner}
        onPress={onPress}
        android_ripple={{ color: COLOR.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuter: {
    marginVertical: 4,
    overflow: "hidden",
    borderRadius: 24,
  },
  buttonInner: {
    backgroundColor: "#5c032b",
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
