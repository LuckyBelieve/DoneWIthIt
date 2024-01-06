import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.inputContainer}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        autoCapitalize="none"
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});
export default AppTextInput;
