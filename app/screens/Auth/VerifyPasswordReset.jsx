import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";

const VerifyPasswordResetScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const handleVerifyCode = () => {
    // Implement code verification logic
    navigation.navigate("ResetPasswordScreen");
  };

  return (
    <View style={styles.container}>
      <Header
        title="Verify Reset Code"
        subtitle="Enter the 6-digit code sent to your email to continue resetting your password."
        onBackPress={() => navigation.goBack()}
      />

      <Input
        label="Reset Code"
        placeholder="Enter reset code"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        maxLength={6}
      />

      <Button text="Verify Code" onPress={handleVerifyCode} />
    </View>
  );
};

export default VerifyPasswordResetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
    paddingHorizontal: spacing.xs,
    paddingTop: wp("10%"),
  },
});
