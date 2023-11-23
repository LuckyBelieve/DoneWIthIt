import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title,subtitle,image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:10,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    title:{
        fontWeight:"500",
    },
    subtitle:{
        color:colors.medium
    }

})
export default ListItem;