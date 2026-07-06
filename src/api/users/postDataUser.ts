import axios from "axios";
import type { User } from "../../entities/types.ts";
import { dataLogin } from "../constants.ts";

export const postDataUser = async (formData: User) : Promise<User> => {
    try {
        const response = await axios.post<User>(`${dataLogin}`, formData);
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
        throw new Error("Произошла ошибка в postDataUser");
    }
};