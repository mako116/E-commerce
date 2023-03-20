import React from 'react'
import FlashCard from './flashCard'
import './flash.css'

const FlashDeals = ({productItems, addToCart}) => {
  return (
    <>
      <section className='flash background'>
        <div className="container ">
            <div className="heading f_flex">
                <i className="fa fa-bolt"></i>
                    <h1>Current Deals</h1>
            </div>
            <FlashCard cla productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
     </>
  )
}

export default FlashDeals
