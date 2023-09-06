import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISlider } from "../../types/Slider"

interface sliderSliceState {
    data: ISlider[],
    isLoading: boolean,
    error: string | null
}

const initialState: sliderSliceState = {
    data: [],
    isLoading: false,
    error: null
}

export const sliderSlice = createSlice({
    name: 'slider',
    initialState, 
    reducers: {
        sliderFetch (state) {
            state.isLoading = true;
        },

        sliderFetchSuccess (state, action: PayloadAction<ISlider[]>) {
            state.isLoading = false;
            state.data = action.payload;
        },

        sliderFetchError (state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading= false;
        }
    }
})

export default sliderSlice.reducer;