import { StyleSheet, Text, View } from "react-native";
import { useTasks } from "../context/TaskContext";
import { ListItem } from "../components/ListItem";

export default function History() {
  const { completedTasks } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas concluídas</Text>

      <View style={styles.completedTasksList}>
        {completedTasks.length === 0 && (
          <Text style={{ color: "white", marginTop: 16, fontSize: 16, textAlign: "center" }}>
            Você ainda não concluiu {"\n"} nenhuma tarefa.
          </Text>
        )}
        {completedTasks.map((task) => (
          <ListItem
            key={task.id}
            title={task.title}
            id={task.id}
            isCompleted={task.isCompleted}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141415",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 32,
  },
  completedTasksList: {
    alignItems: "center",
    gap: 12,
    width: "100%",
    marginTop: 32,
  },
});
