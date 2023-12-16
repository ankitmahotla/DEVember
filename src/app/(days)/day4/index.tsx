import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Animated Splash Screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Splashscreen" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href="/day4/animation" asChild>
        <Button title="Go to Animation" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="Go to Splash Screen Animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
