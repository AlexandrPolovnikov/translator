import { dataI } from "../store/reducers/table.slice";

export default function addColumn(data: dataI) {
    const newColumnName = `column${Math.random()}`;
    const newRows = data.map((row: { [x: string]: any }) => ({ ...row, [newColumnName]: "" }));
    return newRows;
}
