import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/App/Home/HomeScreen";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName == "Home") {
            iconName = focused ? "home" : "home-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Alerts") {
            iconName = focused ? "download" : "download-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Reports") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
            size = focused ? 26 : 24;
          } else if (routeName === "Settings") {
            iconName = focused ? "person" : "person-outline";
            size = focused ? 26 : 24;
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1B4A58",
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveBackgroundColor: "#FFF",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          marginBottom: 0,
          paddingBottom: 5,
          //   borderRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Alerts",
        }}
      />
      <Tab.Screen
        name="Reports"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Reports",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
