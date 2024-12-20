import { dataI } from "../store/reducers/table.slice";

export default function replaceKeys(oldKey: string, newKey: string, data: dataI) {
    const newData: dataI[] = [];
    data.forEach((obj: { [x: string]: any }) => {
        const newObj: { [key: string]: any } = {};
        for (let key in obj) {
            if (key === oldKey) {
                newObj[newKey] = obj[key];
            } else {
                newObj[key] = obj[key];
            }
        }
        newData.push(newObj);
    });
    return newData;
}
