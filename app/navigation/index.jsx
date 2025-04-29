import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigation from "./OnboardingNavigation";
import AuthNavigation from "./AuthNavigation";

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
