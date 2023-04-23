import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

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
        <Image
          style={styles.image}
          source={require("../../assets/images/goals.png")}
        />
        <TextInput
          style={styles.inputTextBox}
          placeholder="Your course goal!"
          onChangeText={handleTextChange}
          value={text}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="Add Goal"
              onPress={handleAddGoalhandler}
              color={"blue"}
            />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={closeModal} color={"#f10909"} />
          </View>
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
    backgroundColor: "#311b6b",
  },
  image: {
    width: 120,
    height: 120,
  },
  inputTextBox: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#e4d0ff",
    borderRadius: 4,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  btn: {
    width: "50%",
  },
});
