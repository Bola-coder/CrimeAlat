import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import images from "../../utils/images";
import Button from "../../components/Button";

const { onboardingImageOne } = images;

const OnboardingScreenOne = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("OnboardingScreenTwo");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={onboardingImageOne}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Stay Aware, Stay Safe</Text>
        <Text style={styles.text}>
          Get real-time alerts about incidents near you.
        </Text>
      </View>

      <Button text="Next" onPress={handleNext} />
    </View>
  );
};

export default OnboardingScreenOne;

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
