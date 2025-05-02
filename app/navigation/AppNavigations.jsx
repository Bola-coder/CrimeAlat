import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
