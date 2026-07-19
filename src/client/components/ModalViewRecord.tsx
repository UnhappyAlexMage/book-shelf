import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { GeneralButton } from '../shared/ui/GeneralButton';
import { FormInput } from '../shared/ui/FormInput';
import { useAuthStore } from '../store/useAuthUser';
import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postDataRecord } from '../api/records/postDataRecord';
import type { Record } from '../entities/types';
import { recordSchema, type recordForFormInputs } from "../shared/validators/recordSchema";


interface PropsModalViewRecord {
    label: string;
};

export default function ModalViewRecord(props: PropsModalViewRecord) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const queryClinet = useQueryClient();

    const user = useAuthStore((state) => state.user); 
    const currentUserId = user?.userId?.toString();


    const { register, handleSubmit, formState: { errors } } = useForm<recordForFormInputs>({ resolver: yupResolver(recordSchema)});

    const { mutate, isPending, isError, reset } = useMutation({
        mutationFn: async (formData: Record) => {
            const authenticatedUser = await postDataRecord(formData);
            return authenticatedUser;
        },
        onSuccess: () => {
            queryClinet.invalidateQueries({ queryKey: ['records', currentUserId] });
            reset();
            setIsOpen(false);
            navigate('/'); 
        },
    });

    const onSubmit = (formData: recordForFormInputs) => {
        const completeRecordData = {
            ...formData,
            authorId: currentUserId,
            recordId: "", 
        };

        mutate(completeRecordData as Record);
    };

    if(isPending) { return <div className='text-slate-300 text-lg p-8'>Выполняется загрузка передачи данных в форму...</div> };
    if(isError) { return <div className='p-8 text-lg text-red-500'>Выполняется загрузка передачи данных в форму...</div> };

    return (
        <div className="p-6">
            <GeneralButton 
                label={props.label}
                onClick={() => setIsOpen(true)}
                
            />
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                            <h4 className="text-lg font-semibold text-slate-800 text-center">Создать новую запись</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                                <FormInput 
                                    label="Название записи:"
                                    type="text"
                                    placeholder="Введите название записи"
                                    name="title"
                                    register={register}
                                    error={errors.title?.message}
                                />
                                <FormInput 
                                    label="Описание записи:"
                                    type="text"
                                    placeholder="Введите название записи"
                                    name="description"
                                    register={register}
                                    error={errors.description?.message}
                                />
                                <div className="flex justify-end gap-2 pt-2">
                                    <GeneralButton 
                                        label="Отмена"
                                        styles='w-full sm:w-auto px-6 py-3 text-center text-black hover:bg-slate-200 border border-slate-300 rounded-xl'
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                    />
                                    <GeneralButton 
                                        label="Создать"
                                        type="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
        </div>
    );
}
