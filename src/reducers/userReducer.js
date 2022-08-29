import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { API_URL } from '../app/helpers/constants'
import { postRequest } from '../app/helpers/fetch'


const initialState = {
    user: {
        UserType: 'admin',
        EmailID: "user@email.com",
        FirstName: "Nimra",
        LastName: "Parveen",
        Location: 'location',
        UserID: 'user123',
        UserStatus: 'active',
        MobileNo: '121313',
        Password: 'pass'
    },
    token: true,
    loading: false,
}



export const signupUser = createAsyncThunk(
    'registeruser',
    async (body) => {
     const result = await  postRequest(`${API_URL}/createUser`, body)
     return result
    }

  )

  export const loginUser = createAsyncThunk(
    'loginUser',
    async (body) => {
     const result = await  postRequest(`${API_URL}/users/login`, body)
     return result
    }

  )

  export const getUserById = createAsyncThunk(
    'getUserById',
    async (body) => {
     const result = await  postRequest(`${API_URL}/getUserByID`, body)
     return result
    }

  )

 const userReducer = createSlice({
     name:'user',
     initialState,
     reducers:{
         logout: (state,action) => {
             state.token = null
             state.user = {}
             localStorage.removeItem('token')
             return state;
         }
     },
     extraReducers: {
         [signupUser.fulfilled]: (state,action) => {
            state.loading = false
            let data = action.payload
            state.user = data;
            return state;
         },
         [loginUser.fulfilled]: (state,action) => { },
         [getUserById.fulfilled]: (state,action) => {
            let data = action.payload
            state.user = data;
            return state;
         },
     }
 })


 export const {logout} = userReducer.actions

 export default userReducer.reducer