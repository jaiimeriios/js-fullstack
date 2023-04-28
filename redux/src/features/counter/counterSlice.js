import { createSlice } from '@reduxjs/toolkit';

const initialValue = 0;

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: initialValue,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = initialValue;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});

export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;

export default counterSlice.reducer;
