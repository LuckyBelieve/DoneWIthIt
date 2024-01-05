import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import Button from "../components/Button";

// api
import listingsAPI from "../APIs/listings";
import useAPI from "../hooks/useAPI";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useAPI(listingsAPI.getListings);
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      {error && (
        <>
          <AppText>couldn't retrieve the listings</AppText>
          <Button title={"Retry"} onpress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subtitle={"$" + item.price}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
