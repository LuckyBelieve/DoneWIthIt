import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppForm, AppFormField,SubmitButton } from "../components/Forms";
import * as yup from "yup";
import { StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import colors from "../config/colors";
import AppText from "../components/AppText";

const validationSchema = yup.object().shape({
  name: yup.string().required().max(255).label("Name"),
  email: yup.string().required().label("Email"),
  password: yup.string().min(5).required().label("Password"),
});

function RegisterScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"name"}
          icon={"account"}
          placeholder={"Name"}
          autoCapitalize="none"
        />
        <AppFormField
          name={"email"}
          icon={"email"}
          placeholder={"Email"}
          keyboardType={"email-address"}
        />
        <AppFormField
          name={"password"}
          icon={"lock"}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        <SubmitButton title={"Register"}/>
        <AppText style={styles.text}>already have an account? <Link style={styles.link} to={"/Login"}>Login</Link></AppText>
      </AppForm>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        padding:15
    },
    text:{
      fontSize: 14,
      textAlign:"center"
    },
    link:{
      color:colors.danger
    }
})
export default RegisterScreen;
