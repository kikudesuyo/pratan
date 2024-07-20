import { create } from "zustand";

type UserState = {
  userId: string | null;
  setUserId: (userId: string | null) => void;
};

const useUserStore = create<UserState>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
}));

export default useUserStore;
