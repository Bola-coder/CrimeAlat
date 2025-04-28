import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fonts, fontSizes, spacing, wp } from "../utils/theme";

const Header = ({ title, subtitle, onBackPress, showBackIcon }) => {
  return (
    <View style={styles.headerContainer}>
      {showBackIcon && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Ionicons name="chevron-back" size={28} color={colors.black} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: spacing["2xl"],
    paddingHorizontal: spacing.sm,
    paddingTop: wp("5%"),
  },
  backButton: {
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes["3xl"],
    color: colors.black,
    textAlign: "center",
    marginBottom: spacing.base,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.base,
    color: colors.background[700],
    textAlign: "center",
    marginHorizontal: spacing.md,
  },
});
