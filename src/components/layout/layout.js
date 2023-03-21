// import React, { useState } from 'react'
// import Routers from '../../Router/Router'
// import Data from '../flashCard/Data'
// import Headers from '../heads/headers'
// import Sdata from '../shops/Sdata'

// const Layout = () => {
//     const {productItems}= Data
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
//   return (
//     <>
//       <Headers cartItem={cartItem}/>
//     <div>
//         <Routers />
//     </div>
    
//     </>
//   )
// }

// export default Layout
