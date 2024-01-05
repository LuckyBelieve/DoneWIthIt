import * as secureStore from "expo-secure-store";

const key = "AuthToken";

const storeToken = async (authToken) => {
  try {
    await secureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing the token", error);
  }
};
const getToken = async () => {
  try {
    return await secureStore.getItemAsync(key);
  } catch (error) {
    console.log("error getting the token", error);
  }
};

const removeToken = async () => {
  try {
    await secureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error deleting the token", error);
  }
};

export default {
  getToken,
  storeToken,
  removeToken,
};
