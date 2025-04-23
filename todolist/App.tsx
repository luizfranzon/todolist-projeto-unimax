import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const Tab = createBottomTabNavigator();

import { TasksPage } from "./pages/TasksPage";
import { CompletedTasks } from "./pages/CompletedTasks";
export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onDelete(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function onAddTask(newTask: Task) {
    setTasks((prevState) => [...prevState, newTask]);
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
      <SafeAreaView>
        <StatusBar style="light" />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Tarefas Pendentes"
              component={() => (
                <TasksPage
                  onAddTask={onAddTask}
                  onCheck={onCheck}
                  onDelete={onDelete}
                  tasks={tasks.filter((task) => !task.isCompleted)}
                />
              )}
            />
            <Tab.Screen name="Tarefas Concluídas" component={CompletedTasks} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
