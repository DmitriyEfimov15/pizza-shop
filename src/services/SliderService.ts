import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { ISlider } from "../types/Slider";

export const SliderAPI = createApi({
    reducerPath: 'SliderApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Slider'],
    endpoints: (build) => ({
        fetchAllSliderData: build.query<ISlider[], number>({
            query: () => ({
                url: 'data-slider'
            }),
            providesTags:['Slider']
        })
    })
})