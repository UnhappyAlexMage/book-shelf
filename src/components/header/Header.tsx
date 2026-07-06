import { NavLink } from "react-router";
import { FiBookOpen, FiMenu } from "react-icons/fi";

import { GeneralButton } from "../../shared/ui/GeneralButton";

import type { ListLi } from "../../entities/typesUI";
import type { User } from "../../entities/types";


type HeaderProps = {
    dataUser: User | null;
    nameButton: string;
    onOpenSidebar: () => void;
    toLink: string;
};

let listArray: ListLi[] = [
    {id: 1, name: "Для вас", toLink: '/'},
    {id: 2, name: "Карта", toLink: '/map'},
    {id: 3, name: "О проекте", toLink: '/about'}
];

export default function Header(props: HeaderProps) {

    // const {isOpen, setIsOpen} = useToggleClick(listArray[0].visible);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md scroll-mt-20">
            <div className=" mx-auto flex h-24 items-center justify-between px-4">
                <NavLink to="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-600 text-white">
                        <FiBookOpen className="text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-slate-800">
                            Книжная полка
                        </h1>
                        <p className="text-xs text-slate-500 pl-1">
                            Чтение и запись журналов
                        </p>
                    </div>
                </NavLink>
                <nav className="hidden lg:block">
                    <ol className="flex items-center gap-15">
                        {listArray.map((link) => (
                            <li key={link.id}>
                                <NavLink to={link.toLink}
                                        className={({ isActive }) => isActive ? "text-sky-600 font-semibold border-b border-b-sky-600" : "text-slate-600 hover:text-sky-600"}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ol>
                </nav>
                <section className="flex items-center gap-3">
                    {props.dataUser ? 
                            (<span className="text-lg font-medium text-slate-700 hidden md:block">
                                Здравствуйте, <b className="text-black">{props.dataUser.email}</b>!
                            </span>
                        ) : (
                            <span className="hidden md:block text-sm sm:text-base md:text-lg font-medium text-slate-700">
                                Здравствуйте, <strong className="text-black">Гость</strong>!
                            </span>
                    )}
                    <GeneralButton 
                        label={props.nameButton}
                        toLink={props.toLink}
                    />
                    <button
                        onClick={props.onOpenSidebar}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 lg:hidden"
                    >
                        <FiMenu className="text-xl" />
                    </button>
                </section>
            </div>
        </header>
    );
};