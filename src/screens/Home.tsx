import { useTasks, Task } from "../context/TaskContext";
import { TasksLists } from "../components/TasksList";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { tasks, addTask } = useTasks();
  const [typedText, setTypedText] = useState("");

  const [orderedTasksByCompleted, setOrderedTasksByCompleted] = useState<
    Task[]
  >([]);

  useEffect(() => {
    const orderedTasks = [...tasks].sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      return 0;
    });

    setOrderedTasksByCompleted(orderedTasks);
  }, [tasks]);

  function handleAddTask() {
    const trimmedText = typedText.trim();

    if (trimmedText === "") {
      return;
    }

    addTask(trimmedText);
    setTypedText("");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Lista de Tarefas</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setTypedText}
            value={typedText}
            placeholder="Digite o nome da tarefa"
            placeholderTextColor="#7A7A80"
          />

          <TouchableOpacity
            disabled={!typedText}
            onPress={handleAddTask}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Adicionar tarefa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemsList}>
          <TasksLists tasksData={orderedTasksByCompleted} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141415",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  form: {
    alignItems: "center",
    gap: 8,
    width: "100%",
    marginTop: 32,
  },
  input: {
    paddingHorizontal: 10,
    borderColor: "#007AFF",
    color: "white",
    borderRadius: 12,
    borderWidth: 1,
    width: "90%",
    height: 58,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 10,
    width: "90%",
    padding: 10,
    height: 58,
  },
  buttonText: {
    color: "white",
  },
  itemsList: {
    alignItems: "center",
  },
});
