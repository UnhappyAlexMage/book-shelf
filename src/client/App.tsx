import React from "react";

import Header from "./components/header/Header";

import useToggleClick from "./hooks/useToggleClick";

import { useAuthStore } from "./store/useAuthUser";
import { Outlet } from "react-router";


function App() {
    const dataUser = useAuthStore((state) => state.user);
    const { isOpen, toggleOpen } = useToggleClick(false);
    const namesButtons: string[] = ["+ Добавить запись", "Войти в аккаунт"];

    return (
        <React.Fragment>
            <Header
                dataUser={dataUser}
                nameButton={namesButtons[1]}
                onOpenSidebar={toggleOpen}
                toLink={"login"}
            />
            <Outlet 
                context={{ isOpen, toggleOpen, nameButtonAddBook: namesButtons[0] }}
            />
        </React.Fragment>
    );
}

export default App;