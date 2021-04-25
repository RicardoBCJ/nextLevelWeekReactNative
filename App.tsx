import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Welcome } from "./src/pages/Welcome";
// import { UserIdentification } from "./src/pages/UserIdentification";
// import { Confirmation } from "./src/pages/Confirmation";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes";
import {} from "@expo-google-fonts/jost";
import * as Notifications from "expo-notifications";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async (notification) => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   }
    // );
    // return () => subscription.remove();

    async function notifications() {
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log("Notificacoes agendadas");
      console.log(data);
    }

    notifications();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
