import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons"
function ListItem({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={1}>{subtitle}</AppText>
              )}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}/>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  detailsContainer: {
    justifyContent: "center",
    flex:1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
    width: "100%",
  },
});
export default ListItem;
