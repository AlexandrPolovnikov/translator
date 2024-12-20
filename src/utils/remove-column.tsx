import { dataI } from "../store/reducers/table.slice";

export default function removeObject(data: dataI, delKey: string) {
    const newData: dataI[] = [];
    data.forEach((obj: { [x: string]: any }) => {
        const newObj: { [key: string]: any } = {};
        for (let key in obj) {
            if (key === delKey) {
                delete newObj[delKey];
            } else {
                newObj[key] = obj[key];
            }
        }
        newData.push(newObj);
    });
    return newData;
}
