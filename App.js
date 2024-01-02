import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
function App(props) {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
