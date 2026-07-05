

import { FiLogOut, FiMail, FiPhone, FiGithub } from "react-icons/fi";

export default function SidebarFooter() {
    return (
        <footer className="mt-auto min-h-3/11 border-t border-gray-200 bg-white px-6 py-5">

            <div className="space-y-3">
                <a
                    href="tel:+79991234567"
                    className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-sky-600"
                >
                    <FiPhone className="shrink-0 text-lg" />
                    <span>+7 (999) 123-45-67</span>
                </a>
                <a
                    href="mailto:booknest@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-sky-600"
                >
                    <FiMail className="shrink-0 text-lg" />
                    <span className="truncate">
                        booknest@gmail.com
                    </span>
                </a>
                <a
                    href="https://github.com/your-username/booknest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-sky-600"
                >
                    <FiGithub className="shrink-0 text-lg" />
                    <span className="truncate">
                        GitHub Repository
                    </span>
                </a>
            </div>
            <button
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-600 py-2.5
                text-sm font-medium text-red-500 hover:text-red-700"
            >
            <FiLogOut className="text-lg" />
                Выйти 
            </button>

        </footer>
    );
}