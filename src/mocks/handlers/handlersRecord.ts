import { http, HttpResponse } from 'msw';
import { recordUsers } from '../data/record';
import type { Record } from '../../entities/types';

//GET: /api/allrecord - Получение конкретного пользователя
export const handlerGetUserRecords = http.get("/api/allrecord", ({ request }) => {
    const url = new URL(request.url);
    const authorId = url.searchParams.get('authorId');

    console.log("Полный URL запроса в MSW:", request.url);
    console.log("Пойманный authorId в MSW:", authorId);

    const filteredRecords = recordUsers.filter(record => record.authorId === authorId);
    return HttpResponse.json(filteredRecords, { status: 200 });
});

 //POST: /api/addRecord — создание новой записи
export const handlerCreateUserRecord = http.post( "/api/addrecord", async ({ request }) => {
    const body = (await request.json()) as Record;

    const newRecord: Record = {
        recordId: Math.random().toFixed(2).toString(),
        title: body.title,
        description: body.description ?? "",
        authorId: body.authorId,
    };

    recordUsers.unshift(newRecord);

    return HttpResponse.json(newRecord, { status: 201 });
  }
);