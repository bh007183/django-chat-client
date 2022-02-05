import { createSlice } from '@reduxjs/toolkit'
import { api_start } from './actions.js'




export const slice = createSlice({
  name: 'User',
  initialState:{
    Success: "",
    Error: "",
    LoggedIn: false,

  },
  reducers: {
    user_created: (User, action) => {
      console.log(action.payload)
      User.Success = true
      window.location.replace("/")
    },
  
    reset_error:(User, action) => {
      User.Error= ""

    },
    logged_in:(User,action) => {
      User.LoggedIn = true
      localStorage.setItem("token", `JWT ${action.payload.access}`)
    },

    set_error: (User, action) => {
      console.log(action.payload)
      User.Error = {message: action.payload.detail}
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {user_created,logged_in, reset_error,set_error } = slice.actions

export default slice.reducer

export const create_user = (data) => api_start({
  url: "http://127.0.0.1:8000/auth/users/",
  method: "POST",
  data: data,
  onSuccess: user_created.type,
  onError: set_error.type
})

export const user_login = (data) => api_start({
  url: "http://127.0.0.1:8000/auth/jwt/create/",
  method: "POST",
  data,
  onSuccess: logged_in.type,
  onError: set_error.type
})
