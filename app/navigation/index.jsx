import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigation from "./OnboardingNavigation";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigations";

export const OnboardNavigation = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigation />
    </NavigationContainer>
  );
};

export const AuthenticationNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export const ApplicationNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
