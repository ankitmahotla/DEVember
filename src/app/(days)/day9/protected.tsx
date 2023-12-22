import { Text, View } from "react-native";

export default function ProtectedScreen() {
  return (
    <View>
      <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello There</Text>
      <Text style={{ fontFamily: "InterSemi", fontSize: 20, color: "gray" }}>
        You should see this page only if you are authenticated.
      </Text>
    </View>
  );
}
