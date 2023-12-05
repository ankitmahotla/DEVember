import { Stack } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

const onBoardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome #DEVember",
    description: "Daily React Native tutorials during December",
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together",
    description: "Learn by building 24 projects with React Native and Expo",
  },
  {
    icon: "people-arrows",
    title: "Education for Children",
    description:
      'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing eduation to every child',
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onBoardingSteps[screenIndex];

  const onContinue = () => {
    if (screenIndex < onBoardingSteps.length - 1) {
      setScreenIndex(screenIndex + 1);
    }
  };
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onBoardingSteps.map((step, index) => (
          <View
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? "red" : "gray" },
            ]}
          />
        ))}
      </View>
      <View style={styles.pageContent}>
        <FontAwesome5
          style={styles.image}
          name={data.icon}
          size={100}
          color="#CEF202"
        />
        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.buttonsRow}>
            <Text style={styles.buttonText}>Skip</Text>
            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: { padding: 20, flex: 1 },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  image: { alignSelf: "center", margin: 20, marginTop: 50 },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: { marginTop: "auto" },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemiBold",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    margin: 5,
    borderRadius: 10,
  },
});
