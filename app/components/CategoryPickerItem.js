import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
        <AppText>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    gap: 3,
    width: "33%",
  },
});
export default CategoryPickerItem;
