import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Icon({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) {
  return (
    <View
      style={[
        styles.icon,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.6} />
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Icon;
