import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    reducer: {
        counterReducer
    }
})

export type RootType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch