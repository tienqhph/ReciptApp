
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { responceMeal, responseCat } from './Tyoe'

export  const CallApi = createApi({
    reducerPath:'food',
    baseQuery:fetchBaseQuery({baseUrl:'https://www.themealdb.com/api/json/v1/1/'}),
    endpoints:(build)=>({
        getTrendingFood :build.query<responceMeal , void>({
            query:(name)=>'search.php?s=a'
        }),
        getCategories :build.query<responseCat , void>({
            query:(name)=>'categories.php'
        }),

        getDetailMeal :build.query<responceMeal , string>({
            query:(id)=>`lookup.php?i=${id}`
        })
    })
})


export const {useGetTrendingFoodQuery , useGetCategoriesQuery , useGetDetailMealQuery} =CallApi