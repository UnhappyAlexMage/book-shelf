import { http, HttpResponse } from 'msw';
import { libraryBooks } from '../data/books';

//GET: /api/users — список всех книжек
export const handlerGetAllUsers = http.get('/api/users', () => {
    return HttpResponse.json(libraryBooks, { status: 200 });
});