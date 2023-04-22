import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ data, deleteGoalItem }) => {
  function handleDelte() {
    deleteGoalItem(data?.item?.id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={handleDelte}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goals}>{data?.item?.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goals: {
    color: "white",
    padding: 10,
  },
});
