import React, { useState }from 'react'
 import ProductList from '../../ul/ProductList'
import Helmet from '../Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../timeline/timeline.css'
import CommonSection from '../../ul/CommonSection'
import products from '../../assets/data/products'
import '../timeline/timeline.css'

const Timeline = () => {
  const[productData,setProductsData] = useState(products)
  const handlefilter = e =>{
    const filterValue = e.target.value
    if( filterValue === 'sofa'){
      const filteredProducts = products.filter((item) => item.category
 === 'sofa') 
setProductsData(filteredProducts)
}
    if( filterValue === 'mobile'){
      const filteredProducts = products.filter((item) => item.category
 === 'mobile') 
setProductsData(filteredProducts)
}
    if( filterValue === 'chair'){
      const filteredProducts = products.filter((item) => item.category
 === 'chair') 
setProductsData(filteredProducts)
}
    if( filterValue === 'watch'){
      const filteredProducts = products.filter((item) => item.category
 === 'watch') 
setProductsData(filteredProducts)
}
    if( filterValue === 'wireless'){
      const filteredProducts = products.filter((item) => item.category
 === 'wireless') 
setProductsData(filteredProducts)
}
}
  const hanlesearch = e=>{
    const searchTerm = e.target.value

    const searchProducts = products.filter((item)=> item.productName.toLowerCase().includes
    (searchTerm.toLowerCase()))
  setProductsData(searchProducts)
  }
  return(
    
    <Helmet title='timeline'>
     <section >
     <div className='spacer'>
          <div className='filter__widget'>
            <select onChange={handlefilter}>
            <option>Filter By Category</option>
              <option value='sofa'>Sofa</option>
              <option value='mobile'>Mobile</option>
              <option value='chair'>Chair</option>
              <option value='watch'>Watch</option>
              <option value='wireless'>Wireless</option>
            </select>
          </div>
       
         <div className='filter__widget'>
            <select>
            <option>Sort By </option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>              
            </select>
          </div>
       </div>
           <div className="search__box">
            <input type="text" placeholder='search......' onChange={hanlesearch}/>
             <span><i className='ri-search-line'></i></span>
          </div>
        
    </section>
    <section className='pt-0'>
    
          {
            productData.length === 0?(
               <h1 className='text-center'>No products are found!</h1>) :(

             <ProductList data={productData}/>
          )}
     
    </section>
    </Helmet>
  )
  
}

export default Timeline
