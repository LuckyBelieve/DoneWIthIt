import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
function App(props) {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
