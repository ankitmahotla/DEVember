import { Button, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";

export default function AnimationScreen() {
  const animation = useRef<LottieView>(null);
  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("@assets/lottie/netflix.json")}
      />
      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} />
    </View>
  );
}
