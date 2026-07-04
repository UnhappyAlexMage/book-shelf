import React from "react";

import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

type SidebarProps = {
    open: boolean;
    onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
    return (
        <React.Fragment>
            {open && (
                <div onClick={onClose} className="fixed inset-0 z-10 bg-opacity-50" />
            )}
            <aside 
                className={`flex h-full flex-col bg-white transition-all duration-300 ease-in-out
                    ${open 
                        ? "w-full border-r border-gray-200" 
                        : "w-0 overflow-hidden border-none"
                    }
                    lg:w-56 lg:border-r lg:border-gray-200 lg:overflow-visible
                `}
            >
                <div className="w-full flex flex-col h-full">
                    <header className="w-full shrink-0">
                        <h2 className="pl-5 pt-4 font-semibold uppercase bg-white text-slate-800 mb-2">
                            Закладки
                        </h2>
                    </header>
                    <div className="flex-1 overflow-y-auto">
                        <SidebarNav />
                    </div>
                    <SidebarFooter />
                </div>
            </aside>
        </React.Fragment>
    );
}