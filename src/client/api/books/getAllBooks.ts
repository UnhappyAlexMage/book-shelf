import axios from "axios";
import type { LibraryBook } from "../../entities/types";
import { dataAllBooks } from "../constants";

export const getAllBooks = async () : Promise<LibraryBook[]> => {
    try {
        const response = await axios.get<LibraryBook[]>(`${dataAllBooks}`);
        return response.data;
    } catch(error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const statusServer = error.response.status;
                const messageServer = error.response.data?.message || "Ошибка сервера";
                throw new Error(`Ошибка ${statusServer}: ${messageServer}`, { cause: error });
            } 
            else if (error.request) {
                throw new Error(`Ошибка соединения с сервером ${error.status}`, { cause: error });
            }

        }
        throw new Error("Произошла ошибка в getAllBooks", {cause: error} );
    }
};

