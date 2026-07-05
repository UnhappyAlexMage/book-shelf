import { NavLink } from "react-router";


interface PropsButton {
    label: string;
    toLink: string;
};

export const GeneralButton = (props: PropsButton) => {

    return (
        <NavLink to={props.toLink}>
            <button 
                className="w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-600
                        text-white font-medium tracking-wide rounded-xl shadow-md 
                        hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-200
                        cursor-pointer text-center"
            >
                {props.label}
            </button>
        </NavLink>
    )
};