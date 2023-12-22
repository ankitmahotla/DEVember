import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";

const description = `
# Authentication
AWS Amplify v6 Authentication
`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 9: Auth" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href="/day8/protected" asChild>
        <Button title="Go to Protected Page" />
      </Link>
    </SafeAreaView>
  );
}
