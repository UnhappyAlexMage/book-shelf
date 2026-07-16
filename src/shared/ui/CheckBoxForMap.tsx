interface PropsCheckBoxForMap {
    label: string;
    type: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export const CheckBoxForMap = (props: PropsCheckBoxForMap) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.checked);
    };

    return (
        <label className="cursor-pointer">
            <input 
                type={props.type} 
                checked={props.checked} 
                onChange={handleChange} 
            />
            {props.label}
        </label>
    )
};