// import React, { useState } from 'react'
// import { Route, Routes ,Navigate } from 'react-router-dom'
// import Cart from '../common/cart'
// import Data from '../components/flashCard/Data'
// //  import Headers from '../components/heads/headers'
// import Sdata from '../components/shops/Sdata'
//   // import Timeline from '../components/timeline/Timeline'
// import Page from '../pages/page'

 
// const Routers = () => {
//   const {productItems}= Data
//     // const {Items}= Data
//     const { shopItems } = Sdata
  
//     const[cartItem, setCardItem]=useState([])
    
//     const addToCart = (product)=>{
//       const productExit = cartItem.find((item)=> item.id === product.id)
//       if(productExit){
//         setCardItem(cartItem.map((item)=> (item.id === product.id ? 
//           {...productExit, qty:productExit.qty+1 }:item)))
  
//       }else{
//         setCardItem([...cartItem, {...product, qty: 1}])
//       }
//     }
//     const decreaseQty = (product)=>{
//       const productExit = cartItem.find((item)=> item.id === product.id)
//      if(productExit.qty ===1){
//       setCardItem(cartItem.filter((item)=> item.id !== product.id))
//      }else{
//       setCardItem(cartItem.map((item)=>(item.id === product.id ? {...productExit, qty: productExit.qty - 1}
//         :item
//         )))
//      }
//     }
//    return (
//     <Routes>
//               {/* <Route path='/' element={<Navigate to='home'/>}/> */}
//           <Route path='/' element={<Page productItems={productItems}  addToCart={addToCart} shopItems={shopItems}/>}/>
//          {/* <Route path='/cart' element={<Cart cartItem={cartItem}  addToCart={addToCart} decreaseQty={decreaseQty}/>}/> */}
        
//          {/* <Route path='timeline' element={<Timeline/>}/> */}
//     </Routes>
//     )
// }

// export default Routers
