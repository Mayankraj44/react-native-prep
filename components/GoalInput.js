import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ show, addGoal, changeModalState }) => {
  const [text, setText] = useState("");
  function handleTextChange(newVal) {
    setText(newVal);
  }

  function handleAddGoalhandler() {
    let goal = text.trim();
    if (goal) {
      addGoal(goal);
      setText("");
      closeModal();
    }
  }
  function closeModal() {
    changeModalState(false);
  }
  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTextBox}
          placeholder="Your course goal!"
          onChangeText={handleTextChange}
          value={text}
        />
        <View style={styles.btnContainer}>
          <Button title="Add Goal" onPress={handleAddGoalhandler} />
          <Button title="Cancel" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 10,
  },
  inputTextBox: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
