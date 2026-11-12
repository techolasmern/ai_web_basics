import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counter.slice";

// Combine reducers (Combine all reducers reducers into one)
const combinedReducer = combineReducers({
    counter: counterReducer,
})

// Configure store (Create the store with the combined reducers)
export const store = configureStore({
    reducer: combinedReducer
});

// Export types for the store state and dispatch function (Used in components to type the state and dispatch function)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;