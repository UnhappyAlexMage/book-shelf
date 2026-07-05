import { handlerGetAllBooks, handlerGetBooksId } from "./handlers/handelrsBooks";
import { handlerGetAllUsers } from "./handlers/handlersUser";

export const handlers = [
    handlerGetAllBooks, handlerGetBooksId,
    handlerGetAllUsers,
];