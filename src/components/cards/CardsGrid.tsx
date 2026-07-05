import React from "react"

import { InputSeacrhBooks } from "../../shared/ui/InputSearchBooks"
import CardsItem from "./CardsItem"
import type { BookStatus, LibraryBook } from "../../entities/types"

interface PropsCardsGrid {
    books: LibraryBook[] | undefined;
    currentStatus: BookStatus;
}

export default function CardsGrid(props: PropsCardsGrid) {

    const filteredBooks = props.books?.filter((book) => {
        if (props.currentStatus === 'Все книги') return true; // Если выбрано "Все", возвращаем все книги
        return book.status === props.currentStatus;     // Иначе строго по совпадению статуса
    });

    return (
        <React.Fragment>
            <InputSeacrhBooks 
                search={""}
                setSearch={()=>""}

            />
            <article className="flex-1">
                <div className="w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-10">
                    <CardsItem 
                        filteredBooks={filteredBooks}
                    />
                </div>
            </article>
        </React.Fragment>
    )
};