interface PropsCheckBoxForMap {
    label: string;
    type: string;
    checked: boolean;
    onChange: (type: any) => void;
};

export const CheckBoxForMap = (props: PropsCheckBoxForMap) => {
    return (
        <label className="cursor-pointer">
            <input 
                type={props.type} 
                checked={props.checked} 
                onChange={props.onChange} 
            />
            {props.label}
        </label>
    )
};