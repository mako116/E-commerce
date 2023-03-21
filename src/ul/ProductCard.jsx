import React, { useState } from 'react'
import { motion } from 'framer-motion'
 import {Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/product-card.css'
 const ProductCard = ({item }) => {
 

  return (
    <Col lg='3' md='4' className='mb-6'>
 <div className='product__item '>
     <div className='product__img'>
        <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt=''/>
     <div className='p-2 product__info'>
        <h3 className='product__name'>
         
        {item.productName}
       
        </h3>
        <span>{item.category}</span>
     </div>
     <div className='product__card-bottom d-flex 
     align-items-center justify-content-between p-2'>
        <span className='price'>{item.price}</span>
        <motion.span whileTap={{scale: 1.2}}  >
        {/* <button onClick={()=> addToCart(item)}>
                    <i className="fa fa-plus"></i>
                </button> */}
        </motion.span>
     </div>
   </div>
 </div>
    </Col>
 
  )
}

export default ProductCard
