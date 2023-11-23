import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <ListItem
        image={require("../assets/mosh.jpg")}
        title={"mosh hamedani"}
        subtitle={"5 listings"}
        />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title:{
   fontSize:24,
   fontWeight:"500",
  },
  price:{
    color:colors.secondary,
    fontWeight:"bold",
    fontSize:20,
    marginVertical:10
  },
  userContainer:{
    marginTop:40
  }
});
export default ListingDetailsScreen;
