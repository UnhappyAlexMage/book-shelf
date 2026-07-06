export interface User {
    userId?: number;
    email: string;
    password: string;
};

// export interface DataAuthUser {
//     id?: number;
//     email: string;
// }

export interface LibraryBook {
    bookId: string;
    title: string;
    authors: string[];
    imageBook: string;
    reccomendedImages: string[];
    status: "Чтение" | "Прочитанные" | "Фавориты";
    startedAt: string;
    descriptions: string;
    favorite: boolean;
};

export type BookStatus = 'Все книги' | 'Чтение' | 'Прочитанные' | 'Фавориты' | 'Ваши записи';

export interface Record {
    recordId: string | number;
    title: string;
    description: string;
    authorId: string;
};