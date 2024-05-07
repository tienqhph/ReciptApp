import { configureStore } from "@reduxjs/toolkit";
import { CallApi } from "../Api/FoodApi";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import SlideReducer, { mealSlice } from "./SlideReducer";


export const  store = configureStore({
    reducer: {
        [CallApi.reducerPath] :CallApi.reducer , 
        mealSlice:SlideReducer ,
    } , 
    middleware:(buildGetDefaultMiddleware)=>
        buildGetDefaultMiddleware().concat(CallApi.middleware)
    
})

export  type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch