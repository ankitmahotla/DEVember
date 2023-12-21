import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";

const description = `
# Weather App
Fetch weather data and display it
`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 7: Weather App" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href="/day8/weather" asChild>
        <Button title="Go to Weather" />
      </Link>
    </SafeAreaView>
  );
}
