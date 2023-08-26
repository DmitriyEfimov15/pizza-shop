import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICity } from '../types/city'

export const cityAPI = createApi({
    reducerPath: 'cityAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['City'],
    endpoints: (build) => ({
        fetchAllCities: build.query<ICity[], number>({
            query: () => ({
                url: "/cities"
            }),
            providesTags: ['City']
        })
    })
})