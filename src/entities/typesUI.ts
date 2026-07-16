import type { IconType } from "react-icons";
import type { BookStatus } from "./types";

export interface ATypesNav {
    id: number;
    current: string;
    label: string;
    icon: IconType;
    uniqueColorText: string;
    padding?: string;
    bookStatus?: BookStatus;
    toLink?: string; 
};

export interface ListLi {
    id: number;
    name: string;
    toLink: string;
};

export interface AContacsLink {
    label: string;
    href: string;
    icon: IconType;
    target?: string;
    rel?: string;
};