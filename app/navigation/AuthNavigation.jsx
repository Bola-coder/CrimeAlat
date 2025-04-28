import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreenOne from "../screens/Onboarding/OnboardingScreenOne";
import OnboardingScreenTwo from "../screens/Onboarding/OnboardingScreenTwo";
import OnboardingScreenThree from "../screens/Onboarding/OnboardingScreenThree";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword";
import VerifyEmailScreen from "../screens/Auth/VerifyEmail";
import SuccessScreen from "../screens/App/SuccessScreen";
import VerifyPasswordResetScreen from "../screens/Auth/VerifyPasswordReset";
import ResetPasswordScreen from "../screens/Auth/ResetPassword";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
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
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="VerifyEmailScreen"
        component={VerifyEmailScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name="VerifyPasswordResetScreen"
        component={VerifyPasswordResetScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
