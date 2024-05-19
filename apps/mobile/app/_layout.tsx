import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="books/[subject]"
          options={{
            headerShown: true,
            headerTitle: "Books",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
            headerBackTitle: "",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="movies/[genre]"
          options={{
            headerShown: true,
            headerTitle: "Movies",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
            headerBackTitle: "",
            headerBackTitleVisible: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </PaperProvider>
  );
};

export default RootLayout;
