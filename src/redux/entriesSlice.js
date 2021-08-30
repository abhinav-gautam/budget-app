import { createSlice } from '@reduxjs/toolkit';

const entriesSlice = createSlice({
    name: "entires",
    initialState: { entries: [] },
    reducers: {
        addEntry: (state, action) => {
            state.entries.push(action.payload)
        },
        deleteEntry: (state, action) => {
            state.entries = state.entries.filter(entry => entry.id !== action.payload)
        },
        editEntries: (state, action) => {
            const index = state.entries.findIndex(entry => entry.id === action.payload.id)
            state.entries[index].description = action.payload.description
            state.entries[index].amount = action.payload.amount
            state.entries[index].isExpense = action.payload.isExpense
        },
        setEntries: (state, action) => {
            state.entries = action.payload
        }
    }
})

export let { addEntry, deleteEntry, editEntries, setEntries } = entriesSlice.actions
export default entriesSlice.reducer