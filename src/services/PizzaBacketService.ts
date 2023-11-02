import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPizza, PizzaBacket } from '../types/Pizza'
export const pizzaAPI = createApi({
    reducerPath: 'pizzaAPI',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000"}),
    tagTypes: ['Pizza'],
    endpoints: (build) => ({
        fetchAllPizzas: build.query<any[], number>({
            query: () => ({
                url: "/users"
            })
        }),

        fetchBacketPizza: build.query<PizzaBacket[], number>({
            query: (id: number) => ({
                url: `/users/${id}/backet`
            }), providesTags: ['Pizza']
        }),
        
       postNewPizza: build.mutation<PizzaBacket, [PizzaBacket, number]>({
        query: ([pizzaItem, id]) => ({
            url: `/users/${id}/backet`,
            method: "POST",
            body: pizzaItem
        }), invalidatesTags: ['Pizza']
        
       }),

       deletePizza: build.mutation<PizzaBacket, PizzaBacket>({
            query: (pizza) => ({
                url: `/backet/${pizza.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Pizza']
       }),

       updatePizza: build.mutation<PizzaBacket, PizzaBacket>({
            query: (pizza) => ({
                url: `/backet/${pizza.id}`,
                method: 'PUT',
                body: pizza
            }), 
            invalidatesTags: ['Pizza']
       })

    })
})