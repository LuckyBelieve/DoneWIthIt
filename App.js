import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/Lists/ListItem";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];
export default function App() {
  const orientation = useDeviceOrientation();
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0].label);
  return (
    //  <ListingDetailsScreen/>
    // <ImageViewScreen/>
    <MessagesScreen/>
    // <AccountScreen/>
    // <ListingsScreen/>
    // <LoginScreen/>
    // <ListingEditScreen />
    // <RegisterScreen/>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 80,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
