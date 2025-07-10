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
import { useSignup } from "../../hooks/useAuth";
import { useToastMessage } from "../../hooks/useToastMessage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { colors, fonts, fontSizes, spacing, wp } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const schema = z
  .object({
    firstname: z.string({ required_error: "Firstname is required" }),
    lastname: z.string({ required_error: "Lastname is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    phoneNumber: z
      .string({ required_error: "Phone number is required" })
      .length(11, "Phone number must be 11 digits")
      .regex(/^[0-9]+$/, "Phone number must be numeric"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string({
      required_error: "Confirm Password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupScreen = ({ navigation }) => {
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);
  const { mutate: signup, isPending } = useSignup();
  const { showToast } = useToastMessage();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email.toLowerCase(),
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    signup(formData, {
      onSuccess: (response) => {
        console.log(response);
        showToast({
          type: "success",
          message: response.message,
        });
        navigation.navigate("VerifyEmailScreen", {
          email: data.email,
        });
      },
      onError: (error) => {
        // console.log(error.request);
        console.log(error);
        if (error?.response?.status === 409) {
          navigation.navigate("VerifyEmailScreen", {
            email: data.email,
          });
        }
        showToast({
          type: "error",
          message: error?.response?.data?.message || "An error occurred",
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
        <Text style={styles.title}>Create Account</Text>

        {/* Firstname */}
        <Controller
          control={control}
          name="firstname"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Firstname"
              placeholder="Enter your firstname"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.firstname?.message}
            />
          )}
        />

        {/* Lastname */}
        <Controller
          control={control}
          name="lastname"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Lastname"
              placeholder="Enter your lastname"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.lastname?.message}
            />
          )}
        />

        {/* Email */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.email?.message}
            />
          )}
        />

        {/* Phone Number */}
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.phoneNumber?.message}
            />
          )}
        />

        {/* Password */}
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

        {/* Confirm Password */}
        <View style={styles.passwordContainer}>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Confirm Password"
                placeholder="Confirm your password"
                secureTextEntry={secureConfirmText}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.confirmPassword?.message}
              />
            )}
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

        <Button
          text="Sign Up"
          onPress={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
          loading={isPending}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xs,
    paddingVertical: wp("10%"),
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
