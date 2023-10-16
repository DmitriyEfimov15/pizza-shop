import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPizza, PizzaBacket } from "../types/Pizza";


export const pizzaListAPI = createApi({
    reducerPath: 'pizzaList',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['PizzaList'],
    endpoints: (build) => ({
        fetchAllPizzaList: build.query<IPizza[], null>({
            query: () => ({
                url: '/pizzas'
            }),
            providesTags: ['PizzaList']
        })
    })
})