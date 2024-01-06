import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title={"Login"}
          onpress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title={"Register"}
          color="secondary"
          onpress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
