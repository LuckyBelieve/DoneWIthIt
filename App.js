import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View,Alert, Platform, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageViewScreen from './app/screens/ImageViewScreen';
export default function App() {
  const orientation  = useDeviceOrientation();
  return (
    // <WelcomeScreen/>
    <ImageViewScreen/>
  );
}

