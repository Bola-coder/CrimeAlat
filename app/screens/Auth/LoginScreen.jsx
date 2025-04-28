import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons"; // Ensure expo install expo/vector-icons

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <Input
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.passwordContainer}>
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
          inputStyle={{ paddingRight: 50 }}
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

      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
        style={styles.forgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button text="Login" onPress={handleLogin} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.signupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    color: colors.primary[900],
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
  forgotPassword: {
    marginTop: spacing.sm,
    alignSelf: "flex-end",
    marginRight: spacing.xl,
  },
  forgotPasswordText: {
    fontFamily: fonts.medium,
    color: colors.primary[700],
    fontSize: fontSizes.sm,
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
  signupText: {
    fontFamily: fonts.bold,
    color: colors.primary[600],
    fontSize: fontSizes.sm,
  },
});
