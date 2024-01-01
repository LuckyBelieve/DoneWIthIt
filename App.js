import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageInput from "./app/components/ImageInput";
import * as ImagePicker from "expo-image-picker";
import Button from "./app/components/Button";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInputList from "./app/components/ImageInputList";
function App(props) {
  
  return (
   <ListingEditScreen/>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default App;
