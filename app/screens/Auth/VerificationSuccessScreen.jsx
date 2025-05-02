import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import images from "../../utils/images";

const { done: doneImage } = images;
const VerificationSuccessScreen = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={doneImage} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.mainText}>Email Verified Successfully</Text>
      <Text style={styles.subText}>
        Your email address has been successfully verified. You can now continue.
      </Text>

      <Button text="Continue" onPress={handleContinue} />
    </View>
  );
};

export default VerificationSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xs,
    paddingTop: wp("15%"),
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp("5%"),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes["2xl"],
    color: colors.primary[900],
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  subText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.sm,
    color: colors.background[700],
    textAlign: "center",
    marginHorizontal: spacing.md,
    marginBottom: spacing["2xl"],
  },
});
