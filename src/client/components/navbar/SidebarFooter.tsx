import React from "react";

import { useAuthStore } from "../../store/useAuthUser";
import { FiLogOut, FiMail, FiPhone, FiGithub } from "react-icons/fi";
import type { AContacsLink } from "../../entities/typesUI";

import { ContacsLink } from "../../shared/ui/ContacsLink";

const dataContacs: AContacsLink[] = [
    {label: "+7(996)123-45-67", href: "tel:+7-996-123-45-67", icon: FiPhone}, 
    {label: "Gmail Author", href: "mailto:alexandr.bro03@gmail.com", target: "blank" ,icon: FiMail},
    {label: "GitHub Repository", href: "https://github.com/UnhappyAlexMage", target: "_blank", rel: "noopener noreferrer", icon: FiGithub}
];

export default function SidebarFooter() {
    const user = useAuthStore((state) => state.user);
    const logoutInStore = useAuthStore((state) => state.logout);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        logoutInStore();
    };

    return (
        <footer className="mt-auto min-h-3/11 border-t border-gray-200 bg-white px-6 py-5">
            <div className="space-y-3">
                {dataContacs.map((contact, index) => (
                    <ContacsLink
                        key={index}
                        label={contact.label}
                        href={contact.href}
                        icon={contact.icon}
                        target={contact.target}
                        rel={contact.rel}
                    />
                ))}

            </div>
            <React.Fragment>
                {(user === null) ? (
                    <div className="mt-6 text-center text-sm outline-1">
                        Перейдите на страницу авторизации для входа
                    </div>
                ) : (                
                    <button
                        onClick={handleClick}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-600 py-2.5
                        text-sm font-medium text-red-500 hover:text-red-700"
                    >
                    <FiLogOut className="text-lg" />
                        Выйти 
                    </button>
                )}
            </React.Fragment>
        </footer>
    );
}