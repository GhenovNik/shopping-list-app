import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.list.push(action.payload);
        },
        removeItem: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
    },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;

export default itemsSlice.reducer;
