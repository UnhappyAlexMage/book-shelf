export interface User {
    id: number;
    email: string;
    password: string;
};

export interface LibraryBook {
    BookId: string;
    title: string;
    authors: string[];
    imageBook: string;
    reccomendedImages: string[];
    status: "Чтение" | "Прочитанные" | "Фавориты";
    startedAt: string;
    notes: string;
    favorite: boolean;
};

export type BookStatus = 'Все книги' | 'Чтение' | 'Прочитанные' | 'Фавориты';