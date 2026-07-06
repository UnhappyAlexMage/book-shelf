import { handlerGetAllBooks, handlerGetBooksId } from "./handlers/handelrsBooks";
import { handlerGetAllUsers, handlerLogin } from "./handlers/handlersUser";
import { handlerGetUserRecords, handlerCreateUserRecord } from "./handlers/handlersRecord";

export const handlers = [
    handlerGetAllBooks, handlerGetBooksId,
    handlerGetAllUsers, handlerLogin,
    handlerGetUserRecords, handlerCreateUserRecord,
];