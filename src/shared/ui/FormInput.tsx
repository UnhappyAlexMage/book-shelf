import type { UseFormRegister } from 'react-hook-form';

interface PropsInputForm {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    register: UseFormRegister<any>;
    error?: string
}

export const FormInput = (props : PropsInputForm) => {
    return (
    <section className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-black-200">
            {props.label}
        </label>
        <input
            type={props.type}
            placeholder={props.placeholder}
            {...props.register(props.name)}
            className="h-10 w-full border-b-2 border-gray-300 text-black outline-none"
        />
        {props.error && (
            <span className="text-xs text-red-400 mt-1">{props.error}</span>
        )}

    </section>
  );
}