import { dataI } from "../store/reducers/table.slice";

export default function addRow(data: dataI[]) {
    const newRow = Object.keys(data[0]).reduce((acc, column) => ({ ...acc, [column]: "" }), {});

    return [...data, newRow];
}
