import axios from "axios";
import type { Record } from "../../entities/types.ts";
import { dataAllRecord } from "../constants";

export const getAllRecords = async (authorId: string | undefined) : Promise<Record[]> => {
    try {
        const response = await axios.get<Record[]>(`${dataAllRecord}`, { params: { authorId} });
        console.log("ФРОНТЕНД: Ответ сервера пришел успешно:", response.data);
        return response.data;
    } catch(error) {
        console.error("ФРОНТЕНД: Произошла ошибка запроса:", error);
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
        throw new Error("Произошла ошибка в getAllRecords");
    }
};

