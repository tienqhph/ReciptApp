import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../Storage/storage '
import { KEYBOOKMARK } from '../constants/constants'



export  const getDatafromStorage =  createAsyncThunk(
    'databookmark' ,
    async (keyload:string , thunkAPI) =>{
        const data = await storage.load({key:keyload})
        console.log("data store" , data);
        
        return data
    }
)


