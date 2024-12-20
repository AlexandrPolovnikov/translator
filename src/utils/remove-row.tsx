import { dataI } from "../store/reducers/table.slice";

export default function removeRow(data: dataI[]) {
    let updatedRows: dataI[] = [...data];
    if (data.length === 1) {
        updatedRows = [{}];
    } else {
        updatedRows.pop();
    }

    return updatedRows;
}
