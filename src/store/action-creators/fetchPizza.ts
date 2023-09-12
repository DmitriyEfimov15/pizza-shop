import axios from "axios"
import { pizzaSlice } from "../reducers/pizzaSlice"
import { AppDispatch } from "../store"

export const fetchPizzaz = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(pizzaSlice.actions.fetchPizza())
            const response = await axios.get('http://localhost:5000/pizzas')
            dispatch(pizzaSlice.actions.fetchPizzaSuccess(response.data))
        } 
        
        catch (e: any) {
            dispatch(pizzaSlice.actions.fetchPizzaError(e.message))
        }
    }
}