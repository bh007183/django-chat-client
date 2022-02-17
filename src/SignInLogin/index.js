import React from 'react'
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StoreProvider } from './Context/store'
export default function SignInLogin() {
  return (
    <StoreProvider>
   <Routes>
       
       <Route path="/login" element={<Login/>}/>
         
       <Route exact path="/register" element={<Register/>}/>
      
   </Routes>
   </StoreProvider>
  )
}
