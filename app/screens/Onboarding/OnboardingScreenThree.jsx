import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAppStore from "../../store/useAppStore";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import images from "../../utils/images";
import Button from "../../components/Button";

const { onboardingImageThree } = images;

const OnboardingScreenThree = () => {
  const navigation = useNavigation();
  const setIsFirstTime = useAppStore((state) => state.setIsFirstTime);

  useEffect(() => {
    return () => {
      setIsFirstTime(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={onboardingImageThree}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get Help Quickly</Text>
        <Text style={styles.text}>
          Connect to emergency services faster when it matters most.
        </Text>
      </View>

      <View>
        <Button
          text={"Login"}
          onPress={() => navigation.navigate("AuthScreen")}
        />
        <Button
          text={"Continue as Guest"}
          onPress={() => navigation.navigate("AuthScreen")}
          buttonStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 0,
            marginTop: 10,
          }}
          textStyle={{ color: colors.primary[800], fontFamily: fonts.semiBold }}
        />
      </View>
    </View>
  );
};

export default OnboardingScreenThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  imageContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp("5%"),
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    width: "100%",
    // height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: fontSizes["4xl"],
    fontFamily: fonts.bold,
    color: colors.black,
    textAlign: "center",
    paddingHorizontal: spacing.xl,
    color: colors.black,
    marginBottom: spacing.sm,
  },

  text: {
    fontSize: fontSizes["lg"],
    fontFamily: fonts.medium,
    color: colors.primary[800],
    textAlign: "center",
    paddingHorizontal: spacing.xl,
    marginTop: 10,
  },
});
