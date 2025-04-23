import { ListItem } from "../components/ListItem";
import { useState } from "react";
import { Task } from "../App";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export interface TaskPageProps {
  onDelete: (id: string) => void;
  onCheck: (id: string, isCompleted: boolean) => void;
  onAddTask: (newTask: Task) => void;
  tasks: Task[];
}

export function TasksPage({ onCheck, onDelete, onAddTask, tasks }: TaskPageProps) {
  const [typedText, setTypedText] = useState("");

  function handleAddTask() {
    if (typedText.trim() === "") {
      return;
    }

    const newTask = {
      id: String(new Date().getTime()),
      isCompleted: false,
      title: typedText,
    };

    setTypedText("");
    onAddTask(newTask);
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setTypedText}
          value={typedText}
          placeholder="Digite o nome da tarefa"
          placeholderTextColor="#7A7A80"
        />

        <TouchableOpacity onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar tarefa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemsList}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            title={task.title}
            id={task.id}
            isCompleted={task.isCompleted}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#141415",
    flex: 1,
  },
  container: {
    backgroundColor: "#141415",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
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
    justifyContent: "center",
    gap: 8,
    marginTop: 24,
  },
});
