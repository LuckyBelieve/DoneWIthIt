import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"
function ImageInput({imageUri}) {
 return (
<View style={styles.container}>
 {!imageUri && (
    <MaterialCommunityIcons name='camera' color={colors.medium} size={40}/>
 )}
 {imageUri && (
    <Image source={{uri:imageUri}} style={styles.image}/>
 )}
</View>
 );
}
const styles = StyleSheet.create({
container:{
    backgroundColor:colors.light,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    overflow:"hidden"
},
image:{
    width:"100%",
    height:"100%"
}
})
export default ImageInput;