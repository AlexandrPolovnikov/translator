import { ChangeEvent, useState } from "react";
import classes from "./column-card.module.scss";

interface Props {
    value: string;
    editValue: (arg: string) => void;
}
export default function ValueCard({ value, editValue }: Props) {
    const [edit, setEdit] = useState<boolean>(false);
    const [text, setText] = useState<string>("");

    return (
        <div className={`${classes.card} row `}>
            {edit ? (
                <div className={`${classes.edit} column `}>
                    <input
                        value={text ?? ""}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setText(event.target.value)
                        }
                    />
                    <button
                        className={classes.button}
                        onClick={() => {
                            editValue(text);
                            setText("");
                            setEdit(false);
                        }}>
                        +
                    </button>
                </div>
            ) : (
                <div className={`${classes.edit}`} onClick={() => setEdit(true)}>
                    <p>{value}</p>
                </div>
            )}
        </div>
    );
}
