import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { pizzaAPI } from "../services/PizzaBacketService"
import citiesReducer from "./reducers/citiesSlice"
import sliderReducer from "./reducers/sliderSlice"
import pizzaReducer from "./reducers/pizzaSlice"

export const rootReducer = combineReducers({
    [pizzaAPI.reducerPath]: pizzaAPI.reducer,
    citiesReducer,
    sliderReducer,
    pizzaReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzaAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] 