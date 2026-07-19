import { Link } from "react-router";
import { useNavigate } from "react-router";

import { FormInput } from "../shared/ui/FormInput";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema, type loginForFormInputs } from "../shared/validators/loginSchema";
import { GeneralButton } from "../shared/ui/GeneralButton";

import { useAuthStore } from "../store/useAuthUser";
import { postDataUser } from "../api/users/postDataUser";
import { useMutation } from "@tanstack/react-query";

export default function LoginPage () {
    const loginInStore = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<loginForFormInputs>({ resolver: yupResolver(loginSchema)});

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async (formData: loginForFormInputs) => {
            const authenticatedUser  = await postDataUser(formData);
            return authenticatedUser;
        },
        onSuccess: (authenticatedUser) => {
            loginInStore({
                userId: authenticatedUser.userId,
                email: authenticatedUser.email,
                password: ''
            });

            navigate('/'); 
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="max-w-md w-full mb-40 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 bg-gray-200">
                <p className="text-center text-black-200">
                    Войдите в аккаунт
                </p>
                <form onSubmit={handleSubmit((correctData) => mutate(correctData))} className="space-y-6">
                    <FormInput
                        name="email"
                        label="Email address" 
                        type="email" 
                        placeholder="Введите @email"
                        register={register}
                        error={errors.email?.message}
                    />
                    <FormInput
                        name="password"
                        label="Password" 
                        type="password"
                        placeholder="Введите пароль"
                        register={register}
                        error={errors.password?.message}
                    />

                    <div className="text-xs bg-black/20 p-3 rounded-lg space-y-1">
                        <div><span className="font-semibold text-black-600">Email:</span> ilya.minin@company.com</div>
                        <div><span className="font-semibold text-black-300">Password:</span> 3password</div>
                    </div>
                    <div className="text-xs bg-black/20 p-3 rounded-lg space-y-1">
                        <div><span className="font-semibold text-black-600">Email:</span> masha.smirnova@company.com</div>
                        <div><span className="font-semibold text-black-300">Password:</span> cmakdw4da</div>
                    </div>
                    
                    {isPending && (
                        <div className="text-sm text-slate-300 text-center font-medium">
                            Проверка введенных данных...
                        </div>
                    )}
                    {isError && (
                        <div className="text-sm text-red-600 text-center font-medium">
                            {error.message}
                        </div>
                    )}
                    <div className="flex justify-center">
                        <GeneralButton
                            type="submit"
                            label={isPending ? "Проверка..." : "Войти"}
                        />
                    </div>
                </form>
                <Link to="/">
                    <div className="text-black-300 hover:underline">⭠ Вернуться обратно</div>
                </Link>
            </div>
        </div>
    )
};