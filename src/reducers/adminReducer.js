import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_URL } from '../app/helpers/constants'
import { postRequest } from '../app/helpers/fetch'


const initialState = {
    admin: {}
}



export const createAdmin = createAsyncThunk(
    'createAdmin',
    async (body) => {
     const result = await  postRequest(`${API_URL}/createAdmin`, body)
     return result
    }

  )

  export const getAdminByID = createAsyncThunk(
    'getAdminByID',
    async (body) => {
     const result = await  postRequest(`${API_URL}/getAdminByID`, body)
     return result
    }

  )

 const adminReducer = createSlice({
     name:'admin',
     initialState,
     extraReducers: {
         [createAdmin.fulfilled]: (state,action) => { },
         [getAdminByID.fulfilled]: (state,action) => {
            let data = action.payload
            state.admin = data;
            return state;
         },
     }
 })



 export default adminReducer.reducer