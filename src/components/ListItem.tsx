import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import { Task, useTasks } from "../context/TaskContext";
import Checkbox from "expo-checkbox";

export function ListItem({ id, isCompleted, title }: Task) {
  const { toggleTaskCompletion, deleteTask } = useTasks();

  function handleDeleteTask() {
    Alert.alert(
      "Deseja realmente deletar essa tarefa?",
      "Essa ação não poderá ser desfeita",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: () => deleteTask(id),
          style: "destructive",
        },
      ]
    );
  }

  function handleCompleteTask() {
    toggleTaskCompletion(id);
  }

  return (
    <TouchableOpacity
      onPress={handleCompleteTask}
      style={[styles.container, { opacity: isCompleted ? 0.2 : 1 }]}
    >
      <View style={styles.textContainer}>
        <Checkbox
          color={"#007AFF"}
          value={isCompleted}
          onValueChange={() => handleCompleteTask()}
        />
        <Text
          style={[
            styles.text,
            { textDecorationLine: isCompleted ? "line-through" : "none" },
          ]}
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDeleteTask} style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    height: 58,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    color: "white",
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
  },
});
