import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useResendVerificationCode, useVerifyEmail } from "../../hooks/useAuth";
import { useToastMessage } from "../../hooks/useToastMessage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";

const VerifyEmailScreen = ({ navigation }) => {
  const route = useRoute();
  const { email } = route.params;
  const [code, setCode] = useState("");
  const { mutate: resendVerificationCode, isPending } =
    useResendVerificationCode();
  const { mutate: verifyEmail, isPending: verifyPending } = useVerifyEmail();
  const { showToast } = useToastMessage();
  const handleVerify = () => {
    // Implement verification logic
    navigation.navigate("SuccessScreen");
  };

  const handleResendCode = () => {
    const userEmail = email.toLowerCase();
    resendVerificationCode(userEmail, {
      onSuccess: (response) => {
        console.log(response);
        showToast({
          type: "success",
          message: response.message,
        });
      },

      onError: (error) => {
        console.log(error);
        showToast({
          type: "error",
          message: error?.response?.data?.message || "Something went wrong",
        });
      },
    });
  };

  const handleVerifyEmail = () => {
    const userEmail = email.toLowerCase();
    console.log(userEmail, "User Email");
    verifyEmail(
      { email: userEmail, verification_code: code },
      {
        onSuccess: (response) => {
          console.log(response);
          showToast({
            type: "success",
            message: response.message,
          });
          navigation.navigate("SuccessScreen");
        },
        onError: (error) => {
          console.log(error);
          showToast({
            type: "error",
            message: error?.response?.data?.message || "Something went wrong",
          });
        },
      }
    );
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

      <Button
        text="Verify"
        onPress={handleVerifyEmail}
        loading={verifyPending}
        loadingText="Verifying..."
        disabled={code.length < 6 || verifyPending}
      />

      <TouchableOpacity
        style={{
          marginTop: spacing.sm,
          paddingVertical: spacing.xs,
          paddingHorizontal: spacing.sm,
          borderRadius: 8,
        }}
        onPress={handleResendCode}
        activeOpacity={0.7}
        disabled={isPending}
      >
        <Text
          style={{
            fontFamily: colors.primary[400],
            fontSize: fontSizes.md,
            color: colors.primary[500],
            textAlign: "center",
            marginTop: spacing.sm,
          }}
        >
          Resend Verification Code
        </Text>
      </TouchableOpacity>
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
