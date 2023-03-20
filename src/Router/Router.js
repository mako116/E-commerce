import React from 'react'
import { Route, Routes ,Navigate } from 'react-router-dom'
import Home from '../components/mainPage/home'

 
const Routers = () => {
  return (
    <Routes>
         <Route path='home' element={<Home/>}/>
    </Routes>
    )
}

export default Routers
