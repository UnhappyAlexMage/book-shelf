
import { FaReadme } from "react-icons/fa6";
import { PiBooksBold } from "react-icons/pi";
import { MdRecommend } from "react-icons/md";
import { AiOutlineFileDone, AiOutlineUserSwitch } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuMapPinCheck } from "react-icons/lu";

import { useState } from "react";
import React from "react";

import type { ATypesNav } from "../../entities/typesUI";
import type { BookStatus } from "../../entities/types";
import { NavLink } from "react-router";

interface PropsSidevarNav {
    currentStatusSidebar: BookStatus;
    setStatusSidebar: (status: BookStatus) => void;
};

let menuItems: ATypesNav[] = [
    { id: 1, current: "Все книги", label: "Все книги", icon: PiBooksBold, uniqueColorText: 'text-sky-600', bookStatus: 'Все книги'},
    { id: 2, current: "Чтение", label: "Чтение", icon: FaReadme, uniqueColorText: 'text-sky-600', bookStatus: 'Чтение'},
    { id: 3, current: "Прочитанные", label: "Прочитанные", icon: AiOutlineFileDone, uniqueColorText: 'text-sky-600', bookStatus: 'Прочитанные'},
    { id: 4, current: "Фавориты", label: "Фавориты", icon: MdRecommend, uniqueColorText: 'text-sky-600', bookStatus: 'Фавориты' },
    { id: 5, current: "Ваши записи", label: "Ваши записи", icon: AiOutlineUserSwitch, uniqueColorText: 'text-yellow-600', padding: 'mt-8', bookStatus: 'Ваши записи'},
    { id: 6, current: "Карта", label: "Карта", icon: LuMapPinCheck, uniqueColorText: 'text-green-700', toLink: '/map'},
    { id: 7, current: "О проекте", label: "О проекте", icon: AiOutlineExclamationCircle, uniqueColorText: 'text-red-500', toLink: '/about'},
];

export default function SidebarNav(props: PropsSidevarNav) {
    const [isCorrect, setIsCorrect] = useState<string>('Все книги');
    

    return(
        <nav className="flex-1 overflow-y-auto space-y-2 bg-white">
            <section className="flex flex-col">
                {menuItems.map((menuItem) => (
                    <React.Fragment key={menuItem.id}>
                        {menuItem.id === 6 && (
                                <span className="mt-4 mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400 border-t border-gray-200">
                                    <h3 className="text-sm text-slate-800 ml-4 mt-4">Другое</h3>
                                </span>
                        )}
                        {menuItem.toLink ? (
                            <NavLink
                                to={menuItem.toLink}
                                onClick={() => setIsCorrect(menuItem.current)}
                            >
                                <div className="flex items-center ml-4 p-2">
                                    <menuItem.icon className={`text-3xl text-gray-400 ${isCorrect === menuItem.current ? menuItem.uniqueColorText : ""}`} />
                                    <span className={`pl-3 pb-1 ${isCorrect === menuItem.current ? menuItem.uniqueColorText : "text-black-400"}`}>
                                        {menuItem.current}
                                    </span>
                                </div>
                            </NavLink>
                                ) : (
                            <button
                                // onClick={() => props.setStatusSidebar(menuItem.current), () => setIsCorrect(menuItem.label)}
                                onClick={() => { setIsCorrect(menuItem.current)
                                    if(menuItem.bookStatus) {
                                        props.setStatusSidebar(menuItem.bookStatus)
                                    }
                                }}
                                className={`flex justify-between w-full h-12 items-center text-2xl 
                                    ${menuItem.padding || ""}
                                    ${ isCorrect === menuItem.current ? "bg-gray-200 font-semibold" : "text-gray-600 bg-transparent" }`}
                            >
                                <div className="flex items-center ml-4 p-1">
                                    <menuItem.icon className={`text-3xl text-gray-400 ${ isCorrect === menuItem.current ? menuItem.uniqueColorText : "" }`} />
                                    <span
                                        className={`pl-3 pb-1 ${ isCorrect === menuItem.current ? menuItem.uniqueColorText : "text-black-400" }`}
                                    >
                                        {menuItem.current}
                                    </span>
                                </div>
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </nav>
    );
}