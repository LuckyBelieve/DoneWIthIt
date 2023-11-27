import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/Lists/ListItem";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ListSeparator from "../components/Lists/ListSeparator";
import ListItemDeleteAction from "../components/Lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "lucky Believe",
    description: "what is the total amount of the couch",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "mosh hamedani",
    description: "Hello there! I would like to discuss on the price for the camera that you posted",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "john smith",
    description: "the jacket is so good looking I wanna buy it",
    image: require("../assets/mosh.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessage] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 3,
              title: "title3",
              description: "description3",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container:{
    flex:1
  }
});

export default MessagesScreen;
