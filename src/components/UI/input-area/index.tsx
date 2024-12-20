import classes from "./text-area-input.module.scss";

interface Props {
    textValue?: string;
    changeEvent: (value: string) => void;
    enterEvent: () => void;
    label?: string;
    holder?: string;
    isDisabled?: boolean;
    styles?: React.CSSProperties;
    className: string;
    classNameLabel?: string;
    isRequired?: boolean;
}
export default function TextAreaInput({
    textValue,
    changeEvent,
    enterEvent,
    label,
    holder,
    isDisabled,
    styles,
    className,
    classNameLabel,
    isRequired,
}: Props) {
    return (
        <div
            className={`${classes.input__container} ${
                isDisabled ? classes.disabled__component : ""
            } row`}>
            {label && (
                <p className={`${classes.label__element} ${classNameLabel}`}>
                    {label}{" "}
                    {isRequired && (
                        <span style={{ color: !isDisabled ? "#f1595e" : "#ddd" }}>*</span>
                    )}
                </p>
            )}
            <textarea
                value={textValue}
                placeholder={holder}
                disabled={isDisabled}
                style={{ ...styles }}
                className={`${classes.area__input} ${className}`}
                onInput={(event) => changeEvent((event.target as HTMLTextAreaElement).value)}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        enterEvent();
                    }
                }}
            />
        </div>
    );
}
