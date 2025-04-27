import { SafeAreaView } from "react-native-safe-area-context";
import { TaskProvider } from "./context/TaskContext";
import Routes from "./routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <TaskProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#141415" }}>
        <StatusBar backgroundColor="#141415" style="light" />
        <Routes />
      </SafeAreaView>
    </TaskProvider>
  );
}
