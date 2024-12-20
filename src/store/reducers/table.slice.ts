import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface dataI {
    [key: string]: any;
}

interface TabsNewI {
    data: dataI[];
    [propName: string]: any;
}

const initialState: TabsNewI = {
    data: [
        { Name: "John", Age: 30, City: "Moscow" },
        { Name: "Jane", Age: 25, City: "Saint Petersburg" },
    ],
};
export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setState: (state: TabsNewI, action: PayloadAction<Partial<TabsNewI>>) => {
            try {
                const valueArg = action.payload;
                for (const key in valueArg) {
                    if (
                        Object.hasOwnProperty.call(valueArg, key) &&
                        Object.hasOwnProperty.call(state, key)
                    ) {
                        state[key] = valueArg[key];
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
});

export const { setState } = tableSlice.actions;

export const selectTableSlice = (state: { table: TabsNewI }) => state.table;

export default tableSlice.reducer;
