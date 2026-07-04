
import { FaReadme } from "react-icons/fa6";
import { PiBooksBold } from "react-icons/pi";
import { IoHeart } from "react-icons/io5";
import { MdRecommend } from "react-icons/md";
import { AiOutlineFileDone, AiOutlineUserSwitch } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuMapPinCheck } from "react-icons/lu";

import { useState } from "react";
import React from "react";

import type { ATypesNav } from "../../entities/typesUI";

let menuItems: ATypesNav[] = [
    { id: 1, title: "Все книги", label: "Все книги", icon: PiBooksBold, uniqueColorText: 'text-sky-600', uniqueColorBG: 'bg-sky-600' },
    { id: 2, title: "Чтение", label: "Чтение", icon: FaReadme, uniqueColorText: 'text-teal-500', uniqueColorBG: 'bg-teal-500' },
    { id: 3, title: "Прочитанные", label: "Прочитанные", icon: AiOutlineFileDone, uniqueColorText: 'text-lime-600', uniqueColorBG: 'bg-lime-500' },
    { id: 4, title: "Рекомендуемые", label: "Рекомендуемые", icon: IoHeart, uniqueColorText: 'text-orange-700', uniqueColorBG: 'bg-orange-500' },
    { id: 5, title: "Фавориты", label: "Фавориты", icon: MdRecommend, uniqueColorText: 'text-purple-900', uniqueColorBG: 'bg-purple-500' },
    { id: 6, title: "Ваши записи", label: "Ваши записи", icon: AiOutlineUserSwitch, uniqueColorText: 'text-green-900', uniqueColorBG: 'bg-green-500', padding: 'mt-8'},
    { id: 7, title: "Карта", label: "Карта", icon: LuMapPinCheck, uniqueColorText: 'text-green-900', uniqueColorBG: 'bg-green-500'},
    { id: 8, title: "О проекте", label: "О проекте", icon: AiOutlineExclamationCircle, uniqueColorText: 'text-gray-600', uniqueColorBG: 'bg-gray-600',},
];

export default function SidebarNav() {
    const [isCorrect, setIsCorrect] = useState<string>('Все книги');

    return(
        <nav className="flex-1 overflow-y-auto space-y-2 bg-white">
            <section className="flex flex-col">
            {menuItems.map((menuItem) => (
                <React.Fragment key={menuItem.id}>
                    {menuItem.id === 7 && (
                        <span className="mt-4 mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400 border-t border-gray-200">
                            <h3 className="text-sm text-slate-800 ml-4 mt-4">Другое</h3>
                        </span>
                    )}
                    <button
                        onClick={() => setIsCorrect(menuItem.label)}
                        className={`flex justify-between w-full h-12 items-center text-2xl 
                            ${menuItem.padding || ""}
                            ${ isCorrect === menuItem.title ? "bg-gray-200 font-semibold" : "text-gray-600 bg-transparent" }`}
                    >
                        <div className="flex items-center ml-4 p-1">
                            <menuItem.icon
                                className={`text-3xl text-gray-400 ${ isCorrect === menuItem.title ? menuItem.uniqueColorText : "" }`}
                            />
                            <span
                                className={`pl-3 pb-1 ${ isCorrect === menuItem.title ? menuItem.uniqueColorText : "text-black-400" }`}
                            >
                                {menuItem.title}
                            </span>
                        </div>
                    </button>
                </React.Fragment>
            ))}
            </section>
        </nav>
    );
}