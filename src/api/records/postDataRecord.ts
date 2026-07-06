import axios from "axios";
import type { Record } from "../../entities/types.ts";
import { dataNewRecord } from "../constants.ts";

export const postDataRecord = async (formData: Record) : Promise<Record> => {
    try {
        const response = await axios.post<Record>(`${dataNewRecord}`, formData);
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
        throw new Error("Произошла ошибка в postDataRecord");
    }
};