



import { createSlice } from '@reduxjs/toolkit'
import { api_start } from './actions.js'




export const slice = createSlice({
  name: 'Chat',
  initialState:{
    Success: "",
    Error: "",
    LoggedIn: false,

  },
  reducers: {
    profile_created: (User, action) => {
      console.log(action.payload)
      User.Success = true
      window.location.href = "/"
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
    set_success: (User, action) => {
      console.log(action.payload)
      User.Success = true
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {profile_created, logged_in, set_success, reset_error,set_error } = slice.actions

export default slice.reducer


export const create_profile = (data) => api_start({
    url: "http://127.0.0.1:8000/chat/profile/",
    method: "POST",
    headers: {
      authorization: localStorage.getItem("token")
    },
    data,
    onSuccess: set_success.type,
    onError: set_error.type
  })