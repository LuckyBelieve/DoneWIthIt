import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../components/Lists/ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListSeparator from "../components/Lists/ListSeparator";
import AuthContext from "../Auth/context";
import AuthStorage from "../Auth/storage";
const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    AuthStorage.removeToken();
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
        />
      </View>
      <ListItem
        title={"Logout"}
        ImageComponent={<Icon name={"logout"} backgroundColor="#ffe66d" />}
        onPress={handleLogout}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
export default AccountScreen;
