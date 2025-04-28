import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, fonts, fontSizes, spacing } from "../utils/theme"; // Adjust path as necessary

const Button = ({
  text,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        disabled && styles.disabledButton,
        buttonStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary[700],
    marginTop: 100,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary[700],
    borderStyle: "solid",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: fontSizes["2xl"],
    fontFamily: fonts.bold,
    color: colors.primary[100],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: colors.primary[300],
  },
});

export default Button;
