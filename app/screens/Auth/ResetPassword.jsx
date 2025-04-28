import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { colors, spacing, wp } from "../../utils/theme";

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    // Implement reset password logic
    navigation.navigate("LoginScreen"); // Or another screen post-successful reset
  };

  return (
    <View style={styles.container}>
      <Header
        title="Reset Password"
        subtitle="Enter your new password below to complete the password reset process."
        onBackPress={() => navigation.goBack()}
      />

      <Input
        label="New Password"
        placeholder="Enter new password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <Input
        label="Confirm Password"
        placeholder="Re-enter new password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button text="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
    paddingHorizontal: spacing.xs,
    paddingTop: wp("10%"),
  },
});
