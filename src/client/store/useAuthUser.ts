import { create } from 'zustand';
import type { User } from '../entities/types';

interface DataAuthState {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
};

export const useAuthStore = create<DataAuthState>((set) => ({
    user: null,
    login: (userData) => set({ user: userData }),
    logout: () => set({ user: null }),
}));
