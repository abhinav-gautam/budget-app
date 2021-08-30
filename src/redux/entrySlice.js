import { createSlice } from '@reduxjs/toolkit';

const initialEntry = {
    id: "",
    description: "",
    amount: "",
    isExpense: false
}

const entrySlice = createSlice({
    name: "entry",
    initialState: { entry: initialEntry },
    reducers: {
        setEntry: (state, action) => {
            state.entry = { ...state.entry, ...action.payload }
        },
        resetEntry: (state) => {
            state.entry = initialEntry
        }
    }
})

export let { setEntry, resetEntry } = entrySlice.actions
export default entrySlice.reducer