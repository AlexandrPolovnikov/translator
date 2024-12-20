import { dataI } from "../store/reducers/table.slice";

export default function editRow(rowIndex: number, key: string, value: string, data: dataI) {
    const updatedRows = data.map((row: { [x: string]: any }, index: number) => {
        if (index === rowIndex) {
            return {
                ...row,
                [key]: value,
            };
        }
        return row;
    });

    return updatedRows;
}
