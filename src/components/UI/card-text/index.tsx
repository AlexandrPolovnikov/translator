import { useEffect, useState } from "react";
import { getLangs, LangI } from "../../../helpers/layout";
import classes from "./main.module.scss";

interface Props {
    text: string;
    valueText: (arg: string) => void;
}
export default function CardText({ text, valueText }: Props) {
    const [layoutData, setLayoutData] = useState<LangI | null>(null);

    useEffect(() => {
        getLangs(text)
            .then(({ data, error }) => {
                if (error || !data) {
                    return {
                        data: null,
                        error: true,
                    };
                }

                setLayoutData(data);
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    }, [text]);

    if (!layoutData) return null;

    return (
        <div className={`${classes.wrapper} container`}>
            {Array.isArray(layoutData.def) &&
                layoutData.def &&
                layoutData.def.map((word, index) => {
                    if (!word) return null;
                    return (
                        <div className={`${classes.block} row`} key={index}>
                            <h2>
                                {word?.text}: (часть речи: {word?.pos}, род: {"-"})
                            </h2>
                            {word?.tr?.some((tr) => tr.mean) && (
                                <ul className={`${classes.text} column-f`}>
                                    {word.tr
                                        .flatMap((tr) => tr.mean)
                                        .map((meaning, i) => {
                                            if (!meaning) return null;
                                            return (
                                                <li
                                                    key={i}
                                                    onClick={() => valueText(meaning?.text)}
                                                    className={classes.text__pointer}>
                                                    {meaning?.text}
                                                </li>
                                            );
                                        })}
                                </ul>
                            )}
                            {word?.tr?.some((tr) => tr.syn) && (
                                <div>
                                    <h3>Синонимы:</h3>
                                    <ul className={`${classes.text} column-f`}>
                                        {word.tr
                                            .flatMap((tr) => tr.syn)
                                            .map((synonym, j) => (
                                                <li
                                                    key={j}
                                                    // onClick={() => valueText(synonym?.text)}
                                                    // className={classes.text__pointer}
                                                >
                                                    {synonym?.text}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                            <p>Часть речи: {word.pos}</p>
                            <h3>Переводы</h3>
                            {word.tr.map((translation, index) => (
                                <div key={index}>
                                    <h4>
                                        {translation.text}: (часть речи: {translation.pos}, род:{" "}
                                        {"-"})
                                    </h4>
                                    {translation.mean && (
                                        <ul className={`${classes.text} column-f`}>
                                            {translation.mean.map((meaning, i) => (
                                                <li key={i}>{meaning.text}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {translation.syn && (
                                        <div>
                                            <h5>Синонимы:</h5>
                                            <ul className={`${classes.text} column-f`}>
                                                {translation.syn.map((synonym, j) => (
                                                    <li key={j}>{synonym.text}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                })}
        </div>
    );
}
