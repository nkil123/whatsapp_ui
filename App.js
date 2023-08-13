import { SafeAreaView, StyleSheet } from "react-native";
import NavigationBar from "./components/NavigationBar";
import ChatScreen from "./screens/ChatScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <ChatScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
    // backgroundColor: "grey"
  }
});
