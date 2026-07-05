import Sidebar from "../components/navbar/Sidebar";

import { GeneralButton } from "../shared/ui/GeneralButton";

import { useOutletContext } from "react-router";
import CardsGrid from "../components/cards/CardsGrid";
import { useAllBooks } from "../api/books/useAllBooks";
import { useFiltedBooks } from "../store/useFilteredBooks";

interface LibraryContext {
    nameButtonAddBook: string;
    isOpen: boolean;
    toggleOpen: () => void;
};

export default function LibraryPage() {
    const { nameButtonAddBook, isOpen, toggleOpen } = useOutletContext<LibraryContext>();

    const {data: books, isLoading, isError, error} = useAllBooks();
    const currentStatusSidebar = useFiltedBooks((state) => state.currentStatus);
    const setStatusSidebar = useFiltedBooks((state) => state.setStatus);

    if (isLoading) { return <div>Загрузка книг из библиотеки...</div> };
    if (isError) { return <div>Ошибка: {error instanceof Error ? error.message : 'Не удалось загрузить книги, нажмите CNTRL + R '}</div> };

    return (
        <div className="flex h-[calc(100vh-4.5rem)] overflow-hidden"> 
            <Sidebar 
                open={isOpen}
                onClose={toggleOpen}
                currentStatusSidebar={currentStatusSidebar}
                setStatusSidebar={setStatusSidebar}
            />
            <main className="flex-1 overflow-y-auto bg-white transition-all duration-300">
                <section className="flex flex-col h-full border-l border-slate-200">
                    <div className="flex w-full justify-between items-center pt-10 pl-10 pr-10 pb-2.5">
                        <div className="flex h-full flex-col ">
                            <h2 className="text-sm font-bold text-slate-800">
                                Моя библиотека
                            </h2>
                            <p className="mt-1 text-slate-500 ">
                                Управляй своей личной библиотекой.
                            </p>
                        </div>
                        <GeneralButton 
                            label={nameButtonAddBook}
                            toLink={"addedBook"}
                        />
                    </div>
                    <CardsGrid
                        books={books}
                        currentStatus={currentStatusSidebar}
                    />
                </section>
            </main>
        </div>
    )
};