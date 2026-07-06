import { NavLink } from 'react-router';

interface PropsGeneralButton {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    toLink?: string;
    onClick?: () => void;
    styles?: string;
}

export const GeneralButton = (props: PropsGeneralButton) => {
    const defaultStyles = `w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-600
                        text-white font-medium tracking-wide rounded-xl shadow-md 
                        hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-200
                        cursor-pointer text-center disabled:opacity-50 disabled:cursor-not-allowed`;

    if (props.toLink) {
        return (
            <NavLink to={props.toLink} className="w-full sm:w-auto">
                <button type="button" className={defaultStyles}>
                    {props.label}
                </button>
            </NavLink>
        );
    }

    return (
        <button
            type={props.type}
            className={props.styles ? props.styles : defaultStyles}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};
