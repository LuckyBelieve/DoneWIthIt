import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(5).max(20).label("Password"),
})
function LoginScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange,errors }) => (
          <>
            <AppTextInput
              placeholder="Email"
              icon={"email"}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email}/>
            <AppTextInput
              icon={"lock"}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
            />
            <ErrorMessage error={errors.password}/>
            <Button
              title={"Login"}
              onpress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 10,
  },
});
export default LoginScreen;
