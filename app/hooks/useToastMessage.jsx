// src/hooks/useToastMessage.ts
import { ToastShowParams } from "react-native-toast-message";
import Toast from "react-native-toast-message";

export const useToastMessage = () => {
  const showToast = ({ message, type }) => {
    Toast.show({
      type,
      text1: message,
      position: "top",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 50,
    });
  };

  return { showToast };
};
