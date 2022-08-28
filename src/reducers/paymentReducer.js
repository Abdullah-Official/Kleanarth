import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_URL } from '../app/helpers/constants'
import { postRequest } from '../app/helpers/fetch'


const initialState = {
    payment: {}
}



export const createPayment = createAsyncThunk(
    'createPayment',
    async (body) => {
     const result = await  postRequest(`${API_URL}/createPayment`, body)
     return result
    }

  )

  export const getPaymentByID = createAsyncThunk(
    'getPaymentByID',
    async (body) => {
     const result = await  postRequest(`${API_URL}/getPaymentByID`, body)
     return result
    }

  )

 const paymentReducer = createSlice({
     name:'payment',
     initialState,
     extraReducers: {
         [createPayment.fulfilled]: (state,action) => { },
         [getPaymentByID.fulfilled]: (state,action) => {
            let data = action.payload
            state.payment = data;
            return state;
         },
     }
 })



 export default paymentReducer.reducer