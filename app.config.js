import "dotenv/config";
console.log(process.env.EXPO_PUBLIC_GOOGLE_MAPS_IOS_API_KEY);

export default {
  expo: {
    name: "CrimeAlat",
    slug: "CrimeAlat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      bundleIdentifier: "com.abatoms.CrimeAlat",
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_IOS_API_KEY,
      },
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      supportsTablet: true,
    },
    android: {
      package: "com.abatoms.CrimeAlat",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_ANDROID_API_KEY,
        },
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-font",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#ffffff",
          image: "./assets/images/icon.png",
          dark: {
            image: "./assets/images/icon.png",
            backgroundColor: "#000000",
          },
          imageWidth: 200,
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow CrimeAlat to use your location.",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "26705c37-410f-4822-9601-59adf61b7338",
      },
    },
  },
};
