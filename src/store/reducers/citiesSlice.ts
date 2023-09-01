import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICity } from "../../types/city"
import {  fetchCitiesExtra } from "../action-creators/fetchCities"


interface CityState {
    cities: ICity[],
    isLoading: boolean,
    error: null | string
}

const initialState: CityState = {
    cities: [],
    isLoading: false,
    error: null
}

export const citiesSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        citiesFetch (state) {
            state.isLoading = true
        },

        citiesFetchingSuccess (state, action: PayloadAction<ICity[]>) {
            state.cities = action.payload;
            state.isLoading = false;
            state.error = null;
        },

        citiesFethcingError (state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        }
    },
    // extraReducers: {
    //     [fetchCitiesExtra.pending.type]: (state) => {
    //         state.isLoading = true
    //     },

    //     [fetchCities.fulfilled.type]: (state, action: PayloadAction<ICity[]>) => {
    //         state.isLoading = false; 
    //         state.cities = action.payload;
    //         state.error = null;
    //     },

    //     [fetchCities.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     }
    // }
})

export default citiesSlice.reducer;