import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword";
import VerifyEmailScreen from "../screens/Auth/VerifyEmail";
import VerificationSuccessScreen from "../screens/Auth/VerificationSuccessScreen";
import VerifyPasswordResetScreen from "../screens/Auth/VerifyPasswordReset";
import ResetPasswordScreen from "../screens/Auth/ResetPassword";
import AppNavigation from "./AppNavigations";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
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
        component={VerificationSuccessScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="App"
        component={AppNavigation}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
