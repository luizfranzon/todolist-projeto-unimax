import { FlatList, View, StyleSheet } from "react-native";
import { Task } from "../context/TaskContext";
import { ListItem } from "./ListItem";

export interface TasksListsProps {
  tasksData: Task[];
  paddingBottom?: number;
}

export function TasksLists({
  tasksData,
  paddingBottom = 200,
}: TasksListsProps) {
  return (
    <View style={[styles.itemsList, { paddingBottom }]}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: 12,
          paddingBottom: 100,
          alignItems: "center",
          paddingInline: 20,
        }}
        data={tasksData}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
          />
        )}
        keyExtractor={(tasksData) => tasksData.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    marginTop: 24,
  },
});
