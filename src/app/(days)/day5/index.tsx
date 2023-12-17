import MarkDownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# AirBNB Maps
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href="/day5/airbnb" asChild>
        <Button title="Go to AirBNB Map" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
