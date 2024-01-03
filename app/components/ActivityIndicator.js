import React from "react";
import { StyleSheet, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
function ActivityIndicator({ visible = false }) {
  if (!visible) return;
  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default ActivityIndicator;
