import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../hooks/useAuth";
import { useToastMessage } from "../../hooks/useToastMessage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQueryClient } from "@tanstack/react-query";

const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

const LoginScreen = ({ navigation }) => {
  const [secureText, setSecureText] = useState(true);
  const { showToast } = useToastMessage();
  const { mutate: login, isPending } = useLogin();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    const formData = {
      email: data.email.toLowerCase(),
      password: data.password,
    };
    login(formData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries(["authStatus"]);
        AsyncStorage.setItem("user", JSON.stringify(response.user));
        AsyncStorage.setItem("token", response.token);
        showToast({
          type: "success",
          message: "Login successful",
        });
        // navigation.replace("App");
      },
      onError: (error) => {
        console.log(error);
        showToast({
          type: "error",
          message: error?.response?.data?.message || "Login failed",
        });
      },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: colors.background[100] }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              placeholder="Enter your email address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
            />
          )}
        />

        <View style={styles.passwordContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={secureText}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message}
              />
            )}
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

        <Button
          text="Login"
          onPress={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
          loading={isPending}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={styles.loginText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xs,
    paddingVertical: wp("15%"),
    backgroundColor: colors.background[100],
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
  forgotPassword: {
    marginTop: spacing.lg,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: colors.primary[600],
    fontFamily: fonts.medium,
    fontSize: fontSizes.sm,
    marginRight: spacing.lg,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.xl,
  },
  footerText: {
    fontFamily: fonts.regular,
    color: colors.background[700],
    fontSize: fontSizes.md,
  },
  loginText: {
    fontFamily: fonts.bold,
    color: colors.primary[600],
    fontSize: fontSizes.md,
  },
});
