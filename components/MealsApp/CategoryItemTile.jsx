import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const CateoryItemTile = ({ title, color }) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.6)" }}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed ? styles.btnPressed : null,
      ]}
    >
      <View style={[styles.grid]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  </View>
);

export default CateoryItemTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "white", // this is required to show shadow in ios
    shadowColor: "black",
    shadowOpacity: "0.25",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonContainer: {
    flex: 1,
  },
  btnPressed: {
    // opacity: 0.5,
  },
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
