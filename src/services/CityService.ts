import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICity } from '../types/city'
import { ISlider } from '../types/Slider'

export const cityAPI = createApi({
    reducerPath: 'cityAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['City', 'Slider'],
    endpoints: (build) => ({
        fetchAllCities: build.query<ICity[], number>({
            query: () => ({
                url: "/cities"
            }),
            providesTags: ['City']
        }),
        fetchAllSliderData: build.query<ISlider[], number>({
            query: () => ({
                url: 'data-slider'
            }),
            providesTags:['Slider']
        })
    })
})