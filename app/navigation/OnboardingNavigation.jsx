import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreenOne from "../screens/Onboarding/OnboardingScreenOne";
import OnboardingScreenTwo from "../screens/Onboarding/OnboardingScreenTwo";
import OnboardingScreenThree from "../screens/Onboarding/OnboardingScreenThree";
import AuthNavigation from "./AuthNavigation";
const Stack = createNativeStackNavigator();
const OnboardingNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="OnboardingScreenOne">
      <Stack.Screen
        name="OnboardingScreenOne"
        component={OnboardingScreenOne}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="OnboardingScreenTwo"
        component={OnboardingScreenTwo}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="OnboardingScreenThree"
        component={OnboardingScreenThree}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="AuthScreen"
        component={AuthNavigation}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigation;
