import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../types/Pizza";

interface PizzaSliseState {
    pizzaz: IPizza[],
    isLoading: boolean,
    error: null | string
}

const initialState: PizzaSliseState = {
    pizzaz: [],
    isLoading: false,
    error: null
}

export const pizzaSlice = createSlice({
    name: "pizzaSlice",
    initialState,
    reducers: {
        fetchPizza (state) {
            state.isLoading = true;
        },

        fetchPizzaSuccess (state, action: PayloadAction<IPizza[]>) {
            state.isLoading = false;
            state.pizzaz = action.payload;
        },

        fetchPizzaError (state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default pizzaSlice.reducer;