import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { AppDispatch } from "../store"
import {citiesSlice} from "../reducers/citiesSlice"
import { ICity } from "../../types/city"

export const fetchCities = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(citiesSlice.actions.citiesFetch()) 
            const response = await axios.get<ICity[]>('http://localhost:5000/cities')
            dispatch(citiesSlice.actions.citiesFetchingSuccess(response.data))
        }
    
        catch (e: any) {
            dispatch(citiesSlice.actions.citiesFethcingError(e.message))
        }
    }
}

export const fetchCitiesExtra = createAsyncThunk(
    'cities/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:5000/cities')
            return response.data;
        }

        catch (e) {
            return thunkAPI.rejectWithValue('Не удалось подгрузить пиццы с сервера!')
        }
     }
)