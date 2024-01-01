import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageInput from './app/components/ImageInput';
import * as ImagePicker from "expo-image-picker";
import Button from './app/components/Button';
import ListingEditScreen from './app/screens/ListingEditScreen';
function App(props) {
  const [imageuri,setImageUri] = useState(null)
  const requestPermission = async ()=>{
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
  }
  useEffect(()=>{
    requestPermission();
  },[])
  const selectImage = async ()=>{
    try {
      const {assets} = await ImagePicker.launchImageLibraryAsync();
      setImageUri(assets[0].uri);
    } catch (error) {
      Alert.alert("Error message","an error occured while seleting the image")
    }
  }
 return (
<SafeAreaView style={styles.container}>
  <ListingEditScreen/>
<StatusBar style='auto'/>
</SafeAreaView>
 );
}
const styles = StyleSheet.create({
container:{}
})
export default App;