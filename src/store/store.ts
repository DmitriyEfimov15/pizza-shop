import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { cityAPI } from "../services/CityService"
import citiesReducer from "./reducers/citiesSlice"
import sliderReducer from "./reducers/sliderSlice"
import pizzaReducer from "./reducers/pizzaSlice"

export const rootReducer = combineReducers({
    // [SliderAPI.reducerPath]: SliderAPI.reducer,
    [cityAPI.reducerPath]: cityAPI.reducer,
    citiesReducer,
    sliderReducer,
    pizzaReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cityAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] 