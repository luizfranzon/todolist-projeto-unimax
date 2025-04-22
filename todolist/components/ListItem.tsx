import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export interface ListItemProps {
  title: string;
  isCompleted: boolean;
  id: string;
  onDelete: (id: string) => void;
  onCheck: (id: string, isCompleted: boolean) => void;
}

export function ListItem({
  title,
  isCompleted,
  id,
  onCheck,
  onDelete,
}: ListItemProps) {
  const [isChecked, setChecked] = useState(isCompleted);

  function handleCheck() {
    setChecked((prevState) => !prevState);
    onCheck(id, isChecked);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <TouchableOpacity onPress={handleCheck} style={styles.container}>
      <View style={styles.textContainer}>
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
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
  }
});
