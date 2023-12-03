import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const days = [1, 6];

export default function App() {
  return (
    <View style={styles.container}>
      {days.map((day) => (
        <View style={styles.box}>
          <Text style={styles.text}>{day}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  box: {
    backgroundColor: "#F9EDE3",
    width: 300,
    height: 300,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9B4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9B4521",
    fontSize: 70,
  },
});
