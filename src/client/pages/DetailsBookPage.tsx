import { useSelectedBook } from '../api/books/useSelectedBook';

import { formatDate } from '../shared/lib/formatData';
import { DetailBookDetailsPage } from '../shared/ui/DatailBlockBookDetailsPage';

import defaultBookCover from '../assets/defaultBookCover.jpg';
import BlocksImages from '../components/BlocksImages';

export default function BookDetailPage() {
    const { data: selectedbook, isLoading, isError } = useSelectedBook();

    if (isLoading) return <div className="p-8">Загрузка книги...</div>;
    if (isError || !selectedbook) return <div className="p-8 text-red-500">Книга не найдена!</div>;

    return (
        <div className="flex h-screen w-full overflow-hidden bg-white">
            <article className="w-[60%] h-full overflow-y-auto p-15 border-r border-slate-200 flex flex-row">
                <div className="flex flex-row justify-centers h-full w-full ">
                    <img
                        className="rounded-2xl object-fill w-2/6 h-3/4"
                        src={selectedbook.imageBook}
                        alt={`Обложка книги: ${selectedbook.title}`}
                        onError={(error) => {
                            if (error.currentTarget.src !== defaultBookCover) {
                                error.currentTarget.src = defaultBookCover;
                            }
                        }}
                    />
                    <section className="min-w-2xl h-3/4 space-y-8  rounded-2xl ">
                        <div className='p-6 flex flex-col'>
                            <div className="space-y-4">
                                <DetailBookDetailsPage
                                    label={selectedbook.title}
                                    data={"Автор: " + selectedbook.authors?.join(", ")}
                                    stylesBlock="flex flex-col items-start"
                                    stylesLabel="text-4xl font-bold text-slate-900"
                                    stylesData="mt-2 text-lg text-slate-500"
                                />
                                <DetailBookDetailsPage
                                    label={selectedbook.status}
                                    stylesLabel="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700 mb-6"
                                />
                            </div>
                            <section className="grid gap-4 sm:grid-cols-2">
                                <DetailBookDetailsPage
                                    label="Дата появления"
                                    data={formatDate(selectedbook.startedAt)}
                                    stylesBlock="rounded-xl border border-slate-300 p-4"
                                    stylesLabel="text-sm text-slate-500"
                                    stylesData="mt-1 break-all font-mono text-sm text-slate-700"
                                />
                                <DetailBookDetailsPage
                                    label="ID Книги"
                                    data={selectedbook.bookId}
                                    stylesBlock="rounded-xl border border-slate-300 p-4 "
                                    stylesLabel="text-sm text-slate-500"
                                    stylesData="mt-1 break-all font-mono text-sm text-slate-700"
                                />

                            </section>
                            <div className='mt-6'>
                                <DetailBookDetailsPage
                                    label="Описание:"
                                    data={selectedbook.descriptions}
                                    stylesLabel="mb-4 text-xl font-semibold text-slate-800 "
                                    stylesData="whitespace-pre-line leading-8 text-slate-600"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <BlocksImages 
                selectedbook={selectedbook}
            />
        </div>
    );
}
