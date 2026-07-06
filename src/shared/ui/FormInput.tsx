import type { UseFormRegister } from 'react-hook-form';

interface PropsInputForm {
    label: string;
    type: string;
    name: string;
    styles?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    error?: string
}

export const FormInput = (props : PropsInputForm) => {
    const stylesDefaultLabel = "text-sm font-medium text-black-200";
    const stylesDefaultInput ="h-10 w-full border-b-2 border-gray-300 text-black outline-none";
    return (
        <section className="flex flex-col space-y-1">
            <label className={props.styles ? props.styles : stylesDefaultLabel}>
                {props.label}
            </label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                {...props.register(props.name)}
                className={props.styles ? props.styles : stylesDefaultInput}
            />
            {props.error && (
                <span className="text-xs text-red-400 mt-1">{props.error}</span>
            )}

        </section>
  );
}