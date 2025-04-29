import { Platform, StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import useAppStore from "./app/store/useAppStore";
import AuthNavigation from "./app/navigation/AuthNavigation";
import { AuthenticationNavigation, OnboardNavigation } from "./app/navigation";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
        "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 40,
  },
});

const Navigation = () => {
  const isFirstTime = useAppStore((state) => state.isFirstTime);
  // const setIsFirstTime = useAppStore((state) => state.setIsFirstTime);

  // useEffect(() => {
  //   setIsFirstTime(true);
  // });

  return isFirstTime ? <OnboardNavigation /> : <AuthenticationNavigation />;
};
