import React from "react";

import { FiEdit2, FiTrash2, FiCalendar } from "react-icons/fi";
import { CardsItemButton } from "../../shared/ui/CardsItemButton";
import type { LibraryBook } from "../../entities/types";

import { formatDate } from "../../shared/lib/formatData";

interface PropsCardsItem {
    filteredBooks: LibraryBook[] | undefined;
}

export default function CardsItem(props: PropsCardsItem) {

    return (
        <React.Fragment>
            {props.filteredBooks?.map((book) => (
                <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                    <div key={book.BookId}>
                        <div className="relative aspect-4.5/4 w-full overflow-hidden bg-slate-100 cursor-pointer">
                            <img
                                src={book.imageBook}
                                alt={`Обложка книги ${book.title}`}
                                className="h-full w-full object-contain"
                            />
                            </div>
                                <div className="space-y-4 p-5">
                                    <div>
                                        <h2 className="line-clamp-1 text-xl font-bold text-slate-800 cursor-pointer">
                                            {book.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-500 cursor-pointer">
                                            {book.authors}
                                        </p>
                                    </div>
                                <span
                                    className="inline-flex rounded-full bg-sky-100 px-2.5 py-0.5 ml-auto text-sm font-medium text-sky-700"
                                >
                                    {book.status}
                                </span>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <FiCalendar />
                                    <span>Started: {formatDate(book.startedAt)}</span>
                                </div>
                            <div className="flex justify-end gap-3 pt-3">
                                <CardsItemButton  icon={<FiEdit2 />} />
                                <CardsItemButton  icon={<FiTrash2 />} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
};