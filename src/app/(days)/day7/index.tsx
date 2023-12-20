import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";

const description = `
# Voice Memos
Work with the Microphone and Audio Playback
`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 7: Voice Memos" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href="/day7/memos" asChild>
        <Button title="Go to Memos" />
      </Link>
    </SafeAreaView>
  );
}
