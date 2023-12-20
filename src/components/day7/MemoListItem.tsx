import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import { AVPlaybackStatus, Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function MemoListItem({ uri }: { uri: string }) {
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { progressUpdateIntervalMillis: 1000 / 60 },
      onPlaybackStatusUpdate
    );
    setSound(sound);
  }

  const onPlaybackStatusUpdate = useCallback(
    async (newStatus: AVPlaybackStatus) => {
      setStatus(newStatus);
      if (!newStatus.isLoaded || !sound) return;
      if (newStatus.didJustFinish) {
        await sound?.setPositionAsync(0);
      }
    },
    [sound]
  );

  useEffect(() => {
    loadSound();
  }, [uri]);

  async function playSound() {
    if (!sound) return;
    if (status?.isLoaded && status.isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.replayAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const formatMillis = (millis: number) => {
    const minutes = Math.floor(millis / 1000 / 60);
    const seconds = millis / 1000 - minutes * 60;

    return `${minutes}:${seconds.toFixed(0).padStart(2, "0")}`;
  };

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const position = status?.isLoaded ? status?.positionMillis : 0;
  const duration = status?.isLoaded ? status?.durationMillis : 1;

  const progress = position / duration;

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: `${progress * 100}%`,
  }));
  return (
    <View style={styles.container}>
      <FontAwesome
        onPress={playSound}
        name={isPlaying ? "pause" : "play"}
        size={20}
        color={"gray"}
      />
      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground} />
        <Animated.View
          style={[styles.playbackIndicator, animatedIndicatorStyle]}
        />
        <Text
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            color: "gray",
            fontFamily: "Inter",
            fontSize: 12,
          }}
        >
          {formatMillis(position)} / {formatMillis(duration)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 10,
    gap: 15,

    shadowColor: "black",
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 3,
  },
  playbackContainer: {
    flex: 1,
    height: 50,
    justifyContent: "center",
  },
  playbackBackground: {
    height: 3,
    backgroundColor: "gainsboro",
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "royalblue",
    position: "absolute",
  },
});
