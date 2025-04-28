import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";

const VerifyEmailScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    // Implement verification logic
    navigation.navigate("SuccessScreen");
  };

  return (
    <View style={styles.container}>
      <Header
        title="Verify Email"
        subtitle="Enter the 6-digit code sent to your email address to verify your account."
        onBackPress={() => navigation.goBack()}
      />

      <Input
        label="Verification Code"
        placeholder="Enter code"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        maxLength={6}
      />

      <Button text="Verify" onPress={handleVerify} />
    </View>
  );
};

export default VerifyEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
    paddingHorizontal: spacing.xs,
    paddingTop: wp("10%"),
  },
});
