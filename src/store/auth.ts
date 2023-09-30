import { create } from 'zustand';

type Store = {
  isAuthenticated: boolean;
  setAuth: (auth: boolean) => void;
};

export const useAuthStore = create<Store>((set) => ({
  isAuthenticated: false,
  setAuth: (auth) => set({ isAuthenticated: auth }),
}));
