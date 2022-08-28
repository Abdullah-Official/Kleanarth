import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_URL } from '../app/helpers/constants'
import { postRequest } from '../app/helpers/fetch'


const initialState = {
    rating: {}
}



export const createRating = createAsyncThunk(
    'createRating',
    async (body) => {
     const result = await  postRequest(`${API_URL}/createRating`, body)
     return result
    }

  )

  export const getRatingByID = createAsyncThunk(
    'getRatingByID',
    async (body) => {
     const result = await  postRequest(`${API_URL}/getRatingByID`, body)
     return result
    }

  )

 const ratingReducer = createSlice({
     name:'rating',
     initialState,
     extraReducers: {
         [createRating.fulfilled]: (state,action) => { },
         [getRatingByID.fulfilled]: (state,action) => {
            let data = action.payload
            state.rating = data;
            return state;
         },
     }
 })



 export default ratingReducer.reducer