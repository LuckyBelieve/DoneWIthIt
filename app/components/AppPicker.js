import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import { Modal } from "react-native";
import PickerItem from "./PickerItem";
function AppPicker({
  items,
  icon,
  placeholder,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns,
}) {
  const [ModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.inputContainer}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}

          <AppText style={styles.text}>
            {selectedItem ? selectedItem : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={ModalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item.label);
              }}
            />
          )}
        />
      </Modal>
    </>
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
    marginVertical: 15,
  },
  text: {
    flex: 1,
    color: colors.medium,
  },
  placeholder: {
    color: colors.medium,
  },
});
export default AppPicker;
