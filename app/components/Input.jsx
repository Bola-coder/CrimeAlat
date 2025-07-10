import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { colors, fonts, fontSizes, spacing } from "../utils/theme"; // Adjust path if needed

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  multiline = false,
  editable = true,
  error,
  inputStyle,
  containerStyle,
  labelStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.background[500]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        editable={editable}
        {...props}
        spellCheck={false}
        autoComplete="off"
        autoCorrect={false}
        autoCapitalize="none"
        textContentType="none"
        importantForAutofill="no"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.sm,
    width: "90%",
    alignSelf: "center",
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.base,
    color: colors.background[900],
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.background[200],
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.base,
    borderWidth: 2,
    borderColor: colors.background[300],
    borderRadius: 8,
    fontFamily: fonts.regular,
    fontSize: fontSizes.base,
    color: colors.background[900],
    borderWidth: 1,
    borderColor: colors.background[300],
  },
  inputError: {
    borderColor: colors.status.alert,
  },
  errorText: {
    color: colors.status.alert,
    fontFamily: fonts.regular,
    fontSize: fontSizes.sm,
    marginTop: spacing.xs,
  },
});

export default Input;
