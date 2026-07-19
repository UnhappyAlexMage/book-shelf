import * as yup from 'yup';

export const recordSchema = yup.object({
    title: yup
        .string()
        .required('Имя записи обязательно!')
        .min(1, 'Имя должно содержать хотя бы 1 символ'),
    description: yup
        .string()
        .required('Описание записи обязательно!')
        .max(20, 'Описание не должно превышать 20 символов')
});

export type recordForFormInputs = yup.InferType<typeof recordSchema>;