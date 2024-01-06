import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";
function ImageViewScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons name="close" color={"white"} size={35} />
        </View>
        <View style={styles.deleteButton}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={"white"}
            size={35}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.Image}
        source={require("../assets/chair.jpg")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    left: 10,
  },
  container: {
    backgroundColor: colors.black,
  },
  deleteButton: {
    position: "absolute",
    right: 10,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageViewScreen;
