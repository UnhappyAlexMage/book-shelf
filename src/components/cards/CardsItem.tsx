import { FiEdit2, FiTrash2, FiCalendar } from "react-icons/fi";
import { CardsItemButton } from "../../shared/ui/CardsItemButton";

export default function CardsItem() {

    return (
        <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-4.5/4 w-full overflow-hidden bg-slate-200 cursor-pointer">
                <img
                    src="https://picsum.photos/500/700"
                    alt="Book cover"
                    className="h-full w-full object-cover"
                />
                </div>
                    <div className="space-y-4 p-5">
                        <div>
                            <h2 className="line-clamp-1 text-xl font-bold text-slate-800 cursor-pointer">
                                Clean Code
                            </h2>
                            <p className="mt-1 text-sm text-slate-500 cursor-pointer">
                                Robert C. Martin
                            </p>
                        </div>
                    <span
                        className="inline-flex rounded-full bg-sky-100 px-2.5 py-0.5 ml-auto text-sm font-medium text-sky-700"
                    >
                        Reading
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <FiCalendar />
                        <span>Started: 12 Jun 2026</span>
                    </div>
                <div className="flex justify-end gap-3 pt-3">
                    <CardsItemButton  icon={<FiEdit2 />} />
                    <CardsItemButton  icon={<FiTrash2 />} />
                </div>
            </div>
        </div>
    )
};