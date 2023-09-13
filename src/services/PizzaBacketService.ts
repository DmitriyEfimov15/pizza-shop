import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICity } from '../types/city'
import { ISlider } from '../types/Slider'
import { IPizza } from '../types/Pizza'

export const pizzaAPI = createApi({
    reducerPath: 'pizzaAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['City', 'Slider'],
    endpoints: (build) => ({
        fetchAllPizzas: build.query<any[], number>({
            query: () => ({
                url: "/users"
            }),
            providesTags: ['City']
        }),
       postNewPizza: build.mutation<IPizza, [IPizza, number]>({
        query: ([pizzaItem, id]) => ({
            url: `/users/${id}/backet`,
            method: "POST",
            body: pizzaItem
        })
       })
    })
})