import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/App/Home/HomeScreen";
import { colors } from "../utils/theme";

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: { active: "home", inactive: "home-outline" },
  Alerts: { active: "notifications", inactive: "notifications-outline" },
  Reports: {
    active: "document-text",
    inactive: "document-text-outline",
  },
  Settings: {
    active: "settings",
    inactive: "settings-outline",
  },
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const routeName = route.name;
        return {
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused
              ? ICONS[routeName]?.active
              : ICONS[routeName]?.inactive;
            return (
              <IonIcons
                name={iconName}
                size={focused ? 26 : 24}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: colors.primary["700"],
          tabBarInactiveTintColor: "#999",
          tabBarActiveBackgroundColor: "#FFF",
          tabBarInactiveBackgroundColor: "#FFF",
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 80,
            paddingBottom: 5,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          headerShown: false,
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Alerts" component={HomeScreen} />
      <Tab.Screen name="Reports" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
