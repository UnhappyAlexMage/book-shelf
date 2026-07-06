import axios from "axios";
import type { LibraryBook } from "../../entities/types.ts";
import { dataDetails } from "../constants.ts";

export const getBookById = async (params: string) : Promise<LibraryBook> => {
    try {
        const response = await axios.get<LibraryBook>(`${dataDetails}/${params}`);
        return response.data;
    } catch(error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const statusServer = error.response.status;
                const messangeServer = error.response.data?.message || "Ошибка сервера";
                console.log(statusServer);
                throw new Error(`${messangeServer}`);
            } 
            else if (error.request) {
                throw new Error(`Ошибка соединения с сервером ${error.status}`);
            }

        }
        throw new Error("Произошла ошибка в getAllUsers");
    }
};

