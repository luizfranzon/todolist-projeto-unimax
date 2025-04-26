import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import History from "../screens/History";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#141415" },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="list" size={24} color="#007AFF" />
          ),
          tabBarLabel: "Tarefas",
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="done" size={24} color="#007AFF" />
          ),
          tabBarLabel: "Concluídas",
        }}
      />
    </Tab.Navigator>
  );
}
