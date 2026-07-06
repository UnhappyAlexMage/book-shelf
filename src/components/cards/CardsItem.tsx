import React from "react";

import { FiEdit2, FiTrash2, FiCalendar } from "react-icons/fi";
import { CardsItemButton } from "../../shared/ui/CardsItemButton";
import type { LibraryBook } from "../../entities/types";

import { formatDate } from "../../shared/lib/formatData";

import defaultBookCover from '../../assets/defaultBookCover.jpg';

import { Link } from "react-router";

interface PropsCardsItem {
    filteredBooks: LibraryBook[] | undefined;
}

export default function CardsItem(props: PropsCardsItem) {

    return (
        <React.Fragment>
            {props.filteredBooks?.map((book) => (
                <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                    <div key={book.bookId}>
                        <div className="relative aspect-4.5/4 w-full overflow-hidden bg-slate-100">
                            <img
                                className="h-full w-full object-contain"
                                src={book.imageBook}
                                alt={`Обложка книги ${book.title}`}
                                onError={(error) => {
                                        if (error.currentTarget.src !== defaultBookCover) {
                                            error.currentTarget.src = defaultBookCover;
                                        }
                                    }
                                }
                            />
                            </div>
                                <div className="space-y-4 p-5">
                                    <div>
                                        <Link to={`detailsBookPage/${book.bookId}`}>
                                            <h2 className="line-clamp-1 text-xl font-bold text-slate-800 cursor-pointer">
                                                {book.title}
                                            </h2>
                                            <p className="mt-1 text-sm text-slate-500 cursor-pointer">
                                                Автор: {book.authors}
                                            </p>
                                        </Link>
                                    </div>
                                <span className="inline-flex rounded-full bg-sky-100 px-2.5 py-0.5 ml-auto text-sm font-medium text-sky-700">
                                    {book.status}
                                </span>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <FiCalendar />
                                    <span>Просмотрена: {formatDate(book.startedAt)}</span>
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