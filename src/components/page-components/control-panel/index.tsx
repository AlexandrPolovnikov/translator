import { useEffect } from "react";
import downloadJSON from "../../../hooks/daownload";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectTableSlice, setState } from "../../../store/reducers/table.slice";
import addColumn from "../../../utils/add-column";
import addRow from "../../../utils/add-row";
import removeObject from "../../../utils/remove-column";
import removeRow from "../../../utils/remove-row";
import classes from "./control-panel.module.scss";

export default function ControlPanel() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(selectTableSlice);
    // const sendNotifyTelegram = async () => {
    //     await sendTelegramMessage(`TEST CSoft ${JSON.stringify(data)}`);
    // };
    // useEffect(() => {
    //     sendNotifyTelegram();
    // }, [data]);
    return (
        <div className={`${classes.control} content column`}>
            <button
                className={classes.button}
                onClick={() => {
                    let updData = addColumn(data);
                    dispatch(
                        setState({
                            data: updData,
                        }),
                    );
                }}>
                Добавить столбец
            </button>
            <button
                className={classes.button}
                onClick={() => {
                    let updData = addRow(data);
                    dispatch(
                        setState({
                            data: updData,
                        }),
                    );
                }}>
                Добавить строку
            </button>
            <button
                className={classes.button}
                onClick={() => {
                    let updData = removeObject(data, Object.keys(data[0]).at(-1) ?? "");

                    dispatch(
                        setState({
                            data: updData,
                        }),
                    );
                }}>
                Удалить столбец
            </button>
            <button
                className={classes.button}
                onClick={() => {
                    let updData = removeRow(data);
                    dispatch(
                        setState({
                            data: updData,
                        }),
                    );
                }}>
                Удалить последнюю строку
            </button>

            <button onClick={() => downloadJSON(data)}>Download JSON</button>
        </div>
    );
}
