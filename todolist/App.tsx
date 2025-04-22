import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { ListItem } from "./components/ListItem";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask() {
    if (typedText.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: String(new Date().getTime()),
      title: typedText,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setTypedText("");
  }

  function onDelete(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function onCheck(id: string, isCompleted: boolean) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !isCompleted } : task
      )
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.main}>
        <StatusBar style="light" />
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
      </SafeAreaView>
    </SafeAreaProvider>
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
