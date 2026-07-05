import type { ReactNode } from "react";
import type { IconType } from "react-icons";


interface PropsCardsItem {
    icon: ReactNode;
}

export const CardsItemButton = (props : PropsCardsItem) => {
    return (
        <button className="flex h-10 w-10 items-center justify-center rounded-xl
                        bg-slate-100 text-slate-600 transition
                        hover:text-sky-600 cursor-pointer
                ">
                {props.icon}
        </button>
    )
};