import { createSlice } from '@reduxjs/toolkit'
import { api_start } from './actions.js'




export const slice = createSlice({
  name: 'User',
  initialState:{

  },
  reducers: {
    set_user: (User, action) => {
      
      User.value += 1
    },
    on_error: (User, action) => {
      User.value -= 1
    },
    on_success: (User, action) => {
      User.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_user, on_error, on_success } = slice.actions

export default slice.reducer

const create_user = () => api_start({

})
