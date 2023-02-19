import React from 'react'
import Head from './head'
import './header.css'
import Navbar from './navbar'
import Search from './search'
 


const Headers=({cartItem})=>{
    return (
        <>
        <Head/>
        <Search cartItem={cartItem}/>
        <Navbar/>
        </>
    )
}

export default Headers
