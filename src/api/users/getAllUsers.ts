import axios from "axios";
import type { User } from "../../entities/types";
import { dataUsers } from "../constants";

export const getAllBooks = async () : Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(`${dataUsers}`);
        return response.data;
    } catch(error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const statusServer = error.response.status;
                const messangeServer = error.response.data?.message || "Ошибка сервера";
                throw new Error(`Ошибка ${statusServer}: ${messangeServer}`);
            } 
            else if (error.request) {
                throw new Error(`Ошибка соединения с сервером ${error.status}`);
            }

        }
        throw new Error("Произошла ошибка в getAllUsers");
    }
};