import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// counter slice initial state type
type Init = {
    value: number;
}

// counter slice initial state
const init: Init = {
    value: 0
}

// counter slice 
const counterSlice = createSlice({
    name: "counter", // Counter slice name
    initialState: init, // Counter slice initial state
    reducers: { // Counter slice reducers for how the state changes
        increment: (state, action: PayloadAction<Init>) => {
            state.value += action.payload.value;
        }, // Increment action reducer
        decrement: (state, action: PayloadAction<Init>) => {
            state.value -= action.payload.value;
        } // Decrement action reducer
    }
});

// Counter slice actions destructuring (export the actions to be used in components)
export const { increment, decrement } = counterSlice.actions; 
// Counter slice reducer (export the reducer to be used in the store)
export const { reducer: counterReducer } = counterSlice;