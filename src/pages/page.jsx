import React from 'react'
// import Footereds from '../common/footer/footer'
// import Footereds from '../common/footer/footer'
// import Footer from '../common/footer/footer'
// import Foot from '../common/footer/Foots'
import Annu from '../components/announcement/annu'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashCard/flashDeals'
import Home from '../components/mainPage/home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shops/Shop'
// import Wrapper from '../components/Wrapper/wrapper'
import TopCate from '../top/topCate'

const Page = ({productItems, cartItem, addToCart,shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu/> 
      {/* <Footereds/> */}
    </>
  )
}

export default Page
