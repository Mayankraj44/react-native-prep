import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  function handleTextChange(newVal) {
    setText(newVal.trim());
  }
  function addGoal() {
    if (text.trim) {
      setList((p) => [...p, text]);
      setText("");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTextBox}
          placeholder="Your course goal!"
          onChangeText={handleTextChange}
          value={text}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalHeading}> List of Goals</Text>
        <FlatList
          data={list}
          renderItem={(itemData) => (
            <Text style={styles.goals}>{itemData?.item}</Text>
          )}
          keyExtractor={(item, ind) => ind}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingHorizontal: 24,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputTextBox: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalHeading: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
  },
  goals: {
    backgroundColor: "blue",
    color: "white",
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
});
