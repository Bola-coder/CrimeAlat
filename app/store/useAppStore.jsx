import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAppStore = create(
  persist(
    (set, get) => ({
      isFirstTime: true,
      setIsFirstTime: (value) => set({ isFirstTime: value }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAppStore;
