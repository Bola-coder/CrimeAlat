import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { colors, fonts, fontSizes, spacing } from "../utils/theme";

const Button = ({
  text,
  onPress,
  disabled = false,
  loading = false,
  loadingText = "Loading...",
  buttonStyle,
  textStyle,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isDisabled && styles.disabledButton,
        loading && styles.loadingButton,
        buttonStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
      {...props}
    >
      <View style={styles.content}>
        <Text
          style={[
            styles.buttonText,
            disabled && styles.disabledText,
            loading && styles.loadingText,
            textStyle,
          ]}
        >
          {loading ? loadingText : text}
        </Text>
        {loading && (
          <ActivityIndicator
            size="small"
            color={colors.primary[500]}
            style={styles.loader}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary[700],
    marginTop: 100,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary[700],
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: fontSizes["2xl"],
    fontFamily: fonts.bold,
    color: colors.primary[100],
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: colors.background[300],
    borderWidth: 0,
  },

  disabledText: {
    color: colors.background[500],
    fontFamily: fonts.regular,
  },
  loadingButton: {
    backgroundColor: colors.white,
    borderColor: colors.primary[500],
  },
  loadingText: {
    color: colors.black,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },
  loader: {
    marginRight: spacing.xs,
  },
});

export default Button;
