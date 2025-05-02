import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../config/axios";

// Signup
export const useSignup = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post("/auth/signup", data);
      return response.data;
    },
  });
};

// Login
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (credentials) => {
      const response = await apiClient.post("/auth/login", credentials);
      const { token, user } = response.data.data;
      await queryClient.setQueryData(["user"], user);
      return { user, token };
    },
  });
};

// Verify Email
export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: async ({ email, verification_code }) => {
      const response = await apiClient.post("/auth/verify", {
        email,
        verification_code,
      });
      return response.data;
    },
  });
};

// Resend Verification Code
export const useResendVerificationCode = () => {
  return useMutation({
    mutationFn: async (email) => {
      const response = await apiClient.post("/auth/verify/resend/", {
        email,
      });
      return response.data;
    },
  });
};

// Check auth status
export const useCheckAuthStatus = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      const response = await apiClient.get("/auth/status");
      return response.data?.user;
    },
    staleTime: 0,
    refetchOnMount: true,
  });
};
