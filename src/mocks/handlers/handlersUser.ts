import { http, HttpResponse } from 'msw';
import { users } from '../data/user.ts';
import type { User } from '../../entities/types';

//GET: /api/users — список всех книжек
export const handlerGetAllUsers = http.get('/api/users', () => {
    return HttpResponse.json(users, { status: 200 });
});

//POST: /api/login - Корректная отправка правильно введеннеых данных аккаунта 
export const handlerLogin = http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json() as User;
    const selectedUser = users.find(user => user.email === email && user.password === password);

    if (!selectedUser) {
        return HttpResponse.json( { message: "Неверный email или пароль. Попробуйте ещё раз!" },  { status: 401 } );
    }

    return HttpResponse.json({ userId: selectedUser.userId, email: selectedUser.email }, { status: 200 });
});