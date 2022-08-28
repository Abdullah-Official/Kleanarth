import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_URL } from '../app/helpers/constants'
import { postRequest } from '../app/helpers/fetch'


const initialState = {
    order: {}
}



export const createOrder = createAsyncThunk(
    'createOrder',
    async (body) => {
     const result = await  postRequest(`${API_URL}/createOrder`, body)
     return result
    }

  )

  export const getOrderByID = createAsyncThunk(
    'getOrderByID',
    async (body) => {
     const result = await  postRequest(`${API_URL}/getOrderByID`, body)
     return result
    }

  )

 const orderReducer = createSlice({
     name:'order',
     initialState,
     extraReducers: {
         [createOrder.fulfilled]: (state,action) => { },
         [getOrderByID.fulfilled]: (state,action) => {
            let data = action.payload
            state.order = data;
            return state;
         },
     }
 })



 export default orderReducer.reducer