import { type IconType } from "react-icons";
import type { BookStatus } from "./types";

export interface ATypesNav {
    id: number;
    current: string;
    label: string;
    icon: IconType;
    uniqueColorText: string;
    uniqueColorBG: string;
    padding?: string;
    bookStatus?: BookStatus;
};

export interface ListLi {
    id: number;
    name: string;
    toLink: string;
};