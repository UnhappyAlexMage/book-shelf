import { create } from 'zustand';
import type { BookStatus } from "../entities/types";

interface FilterBookState {
    currentStatus: BookStatus;
    setStatus: (status: BookStatus) => void;
};

export const useFiltedBooks = create<FilterBookState>((set) => ({
    currentStatus: 'Все книги',
    setStatus: (status) => set({ currentStatus: status }),
}));
