import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center">
      <MaterialCommunityIcons name={icon} size={28} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarStyle: {
            borderTopWidth: 1,
            paddingVertical: 10,
            backgroundColor: "black",
          },
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Books",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon="book-open-variant"
                color={color}
                name="Books"
                focused={undefined}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="movies"
          options={{
            title: "Movies",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon="movie-open-outline"
                color={color}
                name="Movies"
                focused={undefined}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
