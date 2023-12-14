import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

export default function MarkDownDisplay({ children }: PropsWithChildren) {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
}

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
    marginBottom: 10,
    marginTop: 15,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginBottom: 5,
    marginTop: 10,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
