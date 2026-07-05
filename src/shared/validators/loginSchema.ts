import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
        .string()
        .required('Имя пользователя обязательно!')
        .min(1, 'Имя должно содержать хотя бы 1 символ'),
    password: yup
        .string()
        .required('Пароль должен быть обязательным!')
        .min(1, 'Пароль должен содержать хотя бы 1 символ')
});

export type loginForFormInputs = yup.InferType<typeof loginSchema>;