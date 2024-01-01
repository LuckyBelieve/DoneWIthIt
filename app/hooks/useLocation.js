import { useEffect, useState } from "react";
import * as Location from "expo-location";
export default useLocation = () => {
  const [location, setLocation] = useState();
  try {
    const getLocation = async () => {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
