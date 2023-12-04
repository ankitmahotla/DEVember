import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text>Day 1</Text>
    </View>
  );
}
