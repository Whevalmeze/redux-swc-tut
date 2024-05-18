import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}
type Action<T> = {
    type: string,
    payload: T
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state: CounterState, action: Action<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, () => {
            console.log("pending")
        })
        .addCase(incrementAsync.fulfilled, (state: CounterState, action: { type: string, payload: number }) => {
            state.value += action.payload
        })
    }
})
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve => setTimeout(resolve, 1000)))
        return amount; 
    }
)

export const {increment, decrement, incrementByAmount,} = counterSlice.actions;
export default counterSlice.reducer