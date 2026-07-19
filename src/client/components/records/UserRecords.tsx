import { useAuthStore } from '../../store/useAuthUser';
import { useAllRecords } from '../../api/records/useAllRecords';
import { CardsItemButton } from '../../shared/ui/CardsItemButton';
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function UserRecords() {
    const user = useAuthStore((state) => state.user);
    const currentUserId = user?.userId?.toString(); 

    const { data: records, isLoading, isError } = useAllRecords(currentUserId);

    if (!user) {
        return <div className='ml-10 text-xl border-t pt-5 mr-10'>
                Пожалуйста, войдите в аккаунт, чтобы увидеть свои записи.
            </div>;
    };

    if (isLoading) return <div>Загрузка ваших записей...</div>;
    if (isError) return <div>Ошибка загрузки данных...</div>;

    return (
        <section className="p-6">
            <h4 className="text-2xl font-bold mb-4 ml-4">Ваши личные записи: {records?.length}</h4>
            <div className="space-y-4 mr-3 ml-3">
                {records?.map((record) => (
                    <div key={record.recordId} className="group relative flex flex-col sm:flex-row sm:items-start justify-between gap-4 border border-slate-300 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-lg text-slate-800 tracking-tight line-clamp-1">
                                {record.title}
                            </h5>
                            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-3">
                                {record.description}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <CardsItemButton icon={<FiEdit2 className="text-slate-500 hover:text-sky-600 transition-colors" />} />
                            <CardsItemButton icon={<FiTrash2 className="text-slate-500 hover:text-rose-600 transition-colors" />} />
                        </div>
                    </div>
                ))}
                {records?.length === 0 && <p>У вас пока нет созданных записей.</p>}
            </div>
        </section>
    );
};
