import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header"; // ✅ Imported new Header
import { colors, spacing, wp } from "../../utils/theme";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement your password reset logic here
    navigation.navigate("VerifyPasswordResetScreen"); // Navigate to VerifyPasswordResetScreen after sending reset code
  };

  return (
    <View style={styles.container}>
      <Header
        title="Forgot Password"
        subtitle="Enter your registered email address and we'll send you a link to reset your password."
        onBackPress={() => navigation.goBack()}
        showBackIcon={true}
      />

      <Input
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button text="Send Reset Code" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
    paddingHorizontal: spacing.xs,
    paddingTop: wp("5%"),
  },
});
