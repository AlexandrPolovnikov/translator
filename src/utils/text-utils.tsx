export default function addTextLayouts(arr: string) {
    let newArr: string[] = [];
    // const convertStringToNumber = (value: string) => value.replace(/[^0-9]/g, "");

    const arrayOfStrings = arr
        .split(/\s*,\s*|\s+/)
        .map((value) => value.replace(/[^a-zа-яё\s]/gi, ""));
    newArr = arrayOfStrings;

    return [...new Set(newArr)];
}
