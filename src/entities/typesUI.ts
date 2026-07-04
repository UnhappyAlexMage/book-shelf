import { type IconType } from "react-icons";

export interface ATypesNav {
    id: number,
    title: string,
    label: string,
    icon: IconType,
    uniqueColorText: string,
    uniqueColorBG: string,
    padding?: string
};

export interface ListLi {
    id: number;
    name: string;
    toLink: string;
};