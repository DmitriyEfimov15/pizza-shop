import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PizzaLoaction } from "../types/pizzaLocation";


export const localAPI = createApi({
    reducerPath: 'localAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['local'],
    endpoints: (build) => ({
        fetchAllLocation: build.query<PizzaLoaction[], number>({
            query: () => ({
                url: '/adresses'
            }),
            providesTags: ['local']
        })
    })
})