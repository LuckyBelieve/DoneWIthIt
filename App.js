import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  const orientation = useDeviceOrientation();
  return (
     <ListingDetailsScreen/>
    // <ImageViewScreen/>
    // <MessagesScreen/>
    // <AccountScreen/>
    // <ListingsScreen/>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 80,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
