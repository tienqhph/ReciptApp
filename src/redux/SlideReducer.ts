import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { responceMeal } from '../Api/Tyoe'
import { getDatafromStorage } from './GetdataToStorage';



export type BookmarkType = {
    meals: any[];
  };

const  innitialState:BookmarkType = {
        meals:[]
}



export const mealSlice = createSlice({
    name: 'users',
    initialState:innitialState,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(getDatafromStorage.fulfilled, (state, action) => {
        // Add user to the state array
            state.meals = action.payload
            
      })
    },
  })


  export default mealSlice.reducer;