import React from 'react'
import Category from './category'
 import Slider from './slider'
import './home.css'

const Home = () => {
  return (
    <> 
     <section className='home'>
       <div className='container d_flex'>
         <Category/>
         <Slider/>
       </div>
     </section>
    </>
  )
}

export default Home
