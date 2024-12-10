import { create } from 'zustand';
import { User } from '../types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userId: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (userId: string, password: string) => {
    // In a real app, this would make an API call
    if (userId && password) {
      set({
        user: { id: userId, name: 'Test User' },
        isAuthenticated: true,
      });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));