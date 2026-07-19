

interface PropsDetailBookDetailsPage {
    label: string;
    data?: string;
    stylesBlock?: string;
    stylesLabel?: string;
    stylesData?: string;
}

export const DetailBookDetailsPage = (props: PropsDetailBookDetailsPage) => {
    return (
        <div className={props.stylesBlock}>
            <span className={props.stylesLabel}>
                {props.label}
            </span>
            <p className={props.stylesData}>
                {props.data}
            </p>
        </div>
    )
};