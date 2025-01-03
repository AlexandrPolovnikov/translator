import { useEffect, useState } from "react";
import { readFromLocalStorage, writeToLocalStorage } from "../../utils/localstorage";
import addTextLayouts from "../../utils/text-utils";
import PlainButton from "../UI/button";
import CardText from "../UI/card-text";
import TextAreaInput from "../UI/input-area";
import classes from "./index.module.scss";

/**
 * The main page of the application.
 * @returns The main page component.
 */
export default function MainPage() {
    /**
     * The state of the input field.
     */
    const [searchText, setSearchText] = useState<string>("");
    /**
     * The state of the text area.
     */
    const [valueText, setValueText] = useState<string>("");
    /**
     * The first text in the list of text.
     */
    const [firstText] = useState<number>(0);

    /**
     * The list of text stored in the local storage.
     */
    const [storagePullText, setStoragePullText] = useState<string[]>([]);

    /**
     * Analyze the text and return the result.
     * @param text The text to analyze.
     * @returns The result of the analysis.
     */
    function analyzeText(text: string) {
        const result = addTextLayouts(text);
        if (result.length > 1) {
            setValueText(result[firstText]);
        } else {
            setValueText(result[0]);
        }
        return result;
    }

    /**
     * Set the value of the text area and the input field.
     */
    useEffect(() => {
        analyzeText(valueText);
    }, [searchText]);
    /**
     * Get the list of text from the local storage.
     */
    useEffect(() => {
        const text = readFromLocalStorage("setPullText");
        if (Array.isArray(text) && text.length > 0) {
            setStoragePullText(text);
        }
    }, []);

    return (
        <div className={`${classes.wrapper} content `}>
            <TextAreaInput
                // The text area component.
                textValue={valueText ?? ""}
                changeEvent={(val: string) => {
                    // Set the value of the text area.
                    setValueText(val);
                }}
                enterEvent={() => {}}
                label={"Что мы ищем?"}
                holder={"Напишите слово или вставьте текст..."}
                isDisabled={false}
                className={classes.input}
                classNameLabel={""}
                isRequired={false}
            />
            <div className={`${classes.storage__text} column-f gap20 `}>
                {Array.isArray(storagePullText)
                    ? storagePullText.length > 0 &&
                      storagePullText.map((value: string, index: number) => {
                          if (value.length < 3 || !value) return null;
                          return (
                              <p key={index} onClick={() => setValueText(value)}>
                                  {value}
                              </p>
                          );
                      })
                    : null}
            </div>
            <div className="column-f gap20">
                <PlainButton
                    // The search button.
                    className={`${classes.button} `}
                    clickEvent={() => setSearchText(valueText)}
                    isDisabled={valueText.length < 3}>
                    Поиск
                </PlainButton>
                <PlainButton
                    // The save button.
                    className={`${classes.button} `}
                    clickEvent={() => {
                        const pull = analyzeText(valueText);

                        writeToLocalStorage("setPullText", pull);
                        setStoragePullText(pull);
                    }}
                    isDisabled={valueText.length < 3}>
                    Сохранить
                </PlainButton>
            </div>
            <CardText
                // The card text component.
                valueText={(arg) => {
                    setSearchText(arg);
                    setValueText(arg);
                }}
                text={searchText ?? ""}
            />
        </div>
    );
}
