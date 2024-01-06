import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/Auth/context";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthStorage from "./app/Auth/storage";
function App(props) {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const userDetails = await AuthStorage.getToken();
    if (!userDetails) return;
    setUser(userDetails);
  };
  useEffect(() => {
    restoreToken();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
