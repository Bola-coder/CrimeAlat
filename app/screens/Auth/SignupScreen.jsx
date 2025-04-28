import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);

  const handleSignup = () => {
    navigation.navigate("VerifyEmailScreen"); // Navigate to VerifyEmailScreen after signup
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Input
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecureText(!secureText)}
        >
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={24}
            color={colors.background[700]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={secureConfirmText}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecureConfirmText(!secureConfirmText)}
        >
          <Ionicons
            name={secureConfirmText ? "eye-off" : "eye"}
            size={24}
            color={colors.background[700]}
          />
        </TouchableOpacity>
      </View>

      <Button text="Sign Up" onPress={handleSignup} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginText}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
    paddingHorizontal: spacing.xs,
    paddingVertical: wp("10%"),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes["3xl"],
    color: colors.black,
    textAlign: "center",
    marginBottom: spacing["2xl"],
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 30,
    top: 40,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.lg,
  },
  footerText: {
    fontFamily: fonts.regular,
    color: colors.background[700],
    fontSize: fontSizes.sm,
  },
  loginText: {
    fontFamily: fonts.bold,
    color: colors.primary[600],
    fontSize: fontSizes.sm,
  },
});
