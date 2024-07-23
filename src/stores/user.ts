import { create } from "zustand";

type UserState = {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  clearUserId: () => void;
};

const useUserStore = create<UserState>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
  clearUserId: () => set({ userId: null }),
}));

export default useUserStore;
