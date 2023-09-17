import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPizza } from '../types/Pizza'

export const pizzaAPI = createApi({
    reducerPath: 'pizzaAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['Pizza'],
    endpoints: (build) => ({
        fetchAllPizzas: build.query<any[], number>({
            query: () => ({
                url: "/users"
            }),
            providesTags: ['Pizza']
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