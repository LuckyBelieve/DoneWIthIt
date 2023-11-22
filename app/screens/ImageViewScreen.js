import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
function ImageViewScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeButton}></View>
            <View style={styles.deleteButton}></View>
            <Image resizeMode='contain' style={styles.Image} source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeButton:{
     width:50,
     height:50,
     backgroundColor:"#fc5c65",
     position:"absolute",
     left:10
    },
    container:{
        backgroundColor:colors.black
    },
    deleteButton:{
        width:50,
        height:50,
        backgroundColor:colors.secondary,
        position:"absolute",
        right:10

    },
    Image:{
       width:"100%",
       height:"100%"
    }
})
export default ImageViewScreen;