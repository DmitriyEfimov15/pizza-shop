import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { pizzaAPI } from "../services/PizzaBacketService"
import citiesReducer from "./reducers/citiesSlice"
import sliderReducer from "./reducers/sliderSlice"
import pizzaReducer from "./reducers/pizzaSlice"
import { pizzaListAPI } from "../services/PizzaService"
import { localAPI } from "../services/PizzaLocationService"

export const rootReducer = combineReducers({
    [pizzaAPI.reducerPath]: pizzaAPI.reducer,
    [pizzaListAPI.reducerPath]: pizzaListAPI.reducer,
    [localAPI.reducerPath]: localAPI.reducer,
    citiesReducer,
    sliderReducer,
    pizzaReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pizzaAPI.middleware, pizzaListAPI.middleware, localAPI.middleware])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] 