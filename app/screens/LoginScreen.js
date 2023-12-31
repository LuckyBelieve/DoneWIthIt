import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { jwtDecode } from "jwt-decode";
import * as Yup from "yup";
import {
  ErrorMessage,
  AppForm,
  SubmitButton,
  AppFormField,
} from "../components/Forms";
import AppText from "../components/AppText";
import { Link } from "@react-navigation/native";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AuthApi from "../APIs/Auth";
import AuthContext from "../Auth/context";
import AuthStorage from "../Auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginfailed, setLoginFailed] = useState(false);
  const hundleSubmit = async ({ email, password }) => {
    const result = await AuthApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);

    authContext.setUser(result.data);
    AuthStorage.storeToken(result.data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <ErrorMessage
        error={"Invalid email and/or password"}
        visible={loginfailed}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={hundleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"email"}
          icon={"email"}
          keyboardType={"email-address"}
          placeholder={"Email"}
          autoCorrect={false}
          autoCapitalize={"none"}
        />
        <AppFormField
          autoCorrect={false}
          autoCapitalize={"none"}
          name={"password"}
          icon={"lock"}
          placeholder={"Enter your password"}
          secureTextEntry={true}
        />
        <SubmitButton title={"Login"} />
        <AppText style={styles.text}>
          don't have an account?{" "}
          <Link style={styles.link} to={`/${routes.REGISTER}`}>
            Register
          </Link>
        </AppText>
      </AppForm>
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
  text: {
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    color: colors.danger,
  },
});
export default LoginScreen;
