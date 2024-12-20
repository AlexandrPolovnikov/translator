import { useState } from "react";
import CardText from "../UI/card-text";
import TextAreaInput from "../UI/input-area";
import ControlPanel from "./control-panel";
import FirstBlock from "./first-block";
import classes from "./index.module.scss";
import SecondBlock from "./second-block";
import PlainButton from "../UI/button";
export default function MainPage() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [valueText, setValueText] = useState<string | null>(null);
    return (
        <div className={`${classes.wrapper} content `}>
            <TextAreaInput
                textValue={valueText ?? ""}
                // changeEvent={(value) => setSearchText(value)}
                changeEvent={(val: string) => {
                    setValueText(val);
                }}
                enterEvent={() => {}}
                label={"Что мы ищем?"}
                holder={"Поиск..."}
                isDisabled={false}
                className={classes.input}
                classNameLabel={""}
                isRequired={false}
            />
            <PlainButton
                className={`${classes.button} `}
                clickEvent={() => setSearchText(valueText)}
                // isDisabled={}
            >
                Поиск
            </PlainButton>
            <CardText
                valueText={(arg) => {
                    setSearchText(arg);
                    setValueText(arg);
                }}
                text={searchText ?? ""}
            />
        </div>
    );
}
