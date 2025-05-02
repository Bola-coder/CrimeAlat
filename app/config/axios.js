import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
// Setup Axios instance
const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor – attach token
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor  (handle token expiry, global errors, etc.)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      AsyncStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
