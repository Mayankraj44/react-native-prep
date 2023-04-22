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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [addModalIsVisible, setAddModalIsVisible] = useState(false);
  const [list, setList] = useState([]);

  function changeAddModalState(newState) {
    setAddModalIsVisible(newState);
  }

  function addGoal(goal) {
    setList((p) => [...p, { text: goal, id: Math.random().toString() }]);
  }

  function deleteGoalItem(goalId) {
    setList((currentList) => {
      return currentList.filter((item) => item?.id !== goalId);
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.addGoalButton}>
        <Button
          title="Add Goal"
          color={"#5e0acc"}
          onPress={() => changeAddModalState(true)}
        />
      </View>
      <GoalInput
        show={addModalIsVisible}
        addGoal={addGoal}
        changeModalState={changeAddModalState}
      />
      <View style={styles.goalContainer}>
        <Text style={styles.goalHeading}> List of Goals</Text>
        <FlatList
          data={list}
          renderItem={(itemData) => (
            <GoalItem data={itemData} deleteGoalItem={deleteGoalItem} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  addGoalButton: {
    paddingVertical: 20,
  },
  goalContainer: {
    flex: 5,
  },
  goalHeading: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
  },
});
