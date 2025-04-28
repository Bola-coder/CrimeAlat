import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

export const colors = {
  primary: {
    100: "#FFE5E5",
    200: "#FFB8B8",
    300: "#FF8A8A",
    400: "#FF5C5C",
    500: "#FF2E2E",
    600: "#DB2020",
    700: "#B71313",
    800: "#930707",
    900: "#7A0000",
  },
  secondary: {
    100: "#E5E9F5",
    200: "#CCD4EC",
    300: "#B2BFE2",
    400: "#99ABD9",
    500: "#8096CF",
    600: "#6676B2",
    700: "#4D5794",
    800: "#333975",
    900: "#1A1B57",
  },
  background: {
    100: "#F9FAFB",
    200: "#F3F4F6",
    300: "#E5E7EB",
    400: "#D1D5DB",
    500: "#9CA3AF",
    600: "#6B7280",
    700: "#4B5563",
    800: "#374151",
    900: "#1F2937",
  },
  white: "#FFFFFF",
  black: "#000000",
  status: {
    alert: "#FF3B30", // Emergency status red
    success: "#34C759", // Positive action (e.g., alert acknowledged)
    info: "#0A84FF", // Informational messages
    warning: "#FFD60A", // Soft warning (e.g., minor risks)
  },
};

export const fonts = {
  thin: "Inter-Thin",
  extraLight: "Inter-ExtraLight",
  light: "Inter-Light",
  regular: "Inter-Regular",
  medium: "Inter-Medium",
  semiBold: "Inter-SemiBold",
  bold: "Inter-Bold",
  extraBold: "Inter-ExtraBold",
  black: "Inter-Black",
};

export const fontSizes = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 24,
  "4xl": 30,
};

export const spacing = {
  xs: 4,
  sm: 8,
  base: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
};

export const wp = (value) => {
  return widthPercentageToDP(value);
};

export const hp = (value) => {
  return heightPercentageToDP(value);
};
