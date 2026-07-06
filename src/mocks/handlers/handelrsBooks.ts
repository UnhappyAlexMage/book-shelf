import { http, HttpResponse } from 'msw';
import { libraryBooks } from '../data/books';

//GET: /api/books — список всех книжек
export const handlerGetAllBooks = http.get("/api/allbooks", () => { 
    let filteredBooks = [...libraryBooks];
    return HttpResponse.json(filteredBooks, { status: 200 });
});

 // GET: /api/books/:id — получение книги по ID
export const handlerGetBooksId = http.get("/api/detailsBookPage/:bookId", ({ params }) => {
    const { bookId } = params;
    const libraryBook = libraryBooks.find((book) => book.bookId === bookId);

    if(!libraryBook) {
        return HttpResponse.json( {message: "Выбранная книга не была найдена." }, { status: 400 } );
    }
    return HttpResponse.json(libraryBook, { status: 200 } );
});