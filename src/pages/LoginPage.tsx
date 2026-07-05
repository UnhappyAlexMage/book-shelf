import { Link } from "react-router";

import { FormInput } from "../shared/ui/FormInput";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema, type loginForFormInputs } from "../shared/validators/loginSchema";
import { GeneralButton } from "../shared/ui/GeneralButton";

export default function LoginPage () {

    const { register, handleSubmit, formState: { errors } } = useForm<loginForFormInputs>({ resolver: yupResolver(loginSchema)});

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-md w-full mb-40 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 bg-gray-200">
            <p className="text-center text-black-200">
                Войдите в аккаунт
            </p>
            <form onSubmit={handleSubmit((correctData) => correctData)} className="space-y-6">
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
                    type="" 
                    placeholder="Введите пароль"
                    register={register}
                    error={errors.password?.message}
                />

        <div className="text-xs bg-black/20 p-3 rounded-lg space-y-1">
          <div><span className="font-semibold text-black-600">Email:</span> ilya.minin@company.com</div>
          <div><span className="font-semibold text-black-300">Password:</span> 3password</div>
        </div>
            <div className="flex justify-center">
                <GeneralButton 
                    label={"Войти"}
                    toLink={""}
                />
            </div>
            </form>
            <Link to="/">
                <a className="text-black-300 hover:underline" href="#">⭠ Вернуться обратно</a>
            </Link>
        </div>
        </div>
    )
};