import { http, HttpResponse } from 'msw';
import { libraryBooks } from '../data/books';

//GET: /api/books — список всех книжек
export const handlerGetAllBooks = http.get("/api/allbooks", ({ request }) => { 

    let filteredBooks = [...libraryBooks];
    return HttpResponse.json(filteredBooks, { status: 200 });
});

 // GET /api/books/:id — заявка по ID
export const handlerGetBooksId = http.get("/api/allbooks/:BookId", ({ params }) => {
    const { BookId } = params;
    const libraryBook = libraryBooks.find((book) => book.BookId === BookId);

    if(!libraryBook) {
        return HttpResponse.json( {message: "Ticket not Found in Mock" }, { status: 400 } );
    }
    return HttpResponse.json(libraryBook, { status: 200 } );
});