import type { IconType } from "react-icons";

interface PropsConctacsLink {
    label: string;
    href: string;
    icon: IconType;
    target?: string;
    rel?: string;
}

export const ContacsLink = (props: PropsConctacsLink) => {
    return(
        <a className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-sky-500"
            href={props.href}
            target={props.target}
            rel={props.rel}
        >
            <props.icon className="text-lg" />
            <span className="font-mono">
                {props.label}
            </span>
        </a>
    )
};