import axios from "axios"
import {sliderSlice} from "../reducers/sliderSlice"
import { AppDispatch } from "../store"
import { ISlider } from "../../types/Slider"


export const fetchSlider = () => {
    return async (dispath: AppDispatch) => {
        try {
            dispath(sliderSlice.actions.sliderFetch())
            const response = await axios.get<ISlider[]>("http://localhost:5000/data-slider")
            dispath(sliderSlice.actions.sliderFetchSuccess(response.data))
        }
        catch (e: any) {
            dispath(sliderSlice.actions.sliderFetchError(e.message))
        }
    }
}