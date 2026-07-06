import { useState } from "react";


export default function useToggleClick (initialValue: boolean) {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return {isOpen, toggleOpen}
};