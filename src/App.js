 import './App.css';
 import Headers from './components/heads/headers';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Page from './pages/page';
 import Data from "./components/flashCard/Data"
 import Shop from './components/shops/Shop';
import { useState } from 'react';
import Cart from './common/cart';
import Sdata from './components/shops/Sdata';
import Footer from './common/footer/footer';


const App=()=> {
  // step 1 fetch data from database
  const {productItems}= Data
  // const {Items}= Data
  const { shopItems } = Sdata


  const[cartItem, setCardItem]=useState([])
  
  const addToCart = (product)=>{
    const productExit = cartItem.find((item)=> item.id === product.id)
    if(productExit){
      setCardItem(cartItem.map((item)=> (item.id === product.id ? 
        {...productExit, qty:productExit.qty+1 }:item)))

    }else{
      setCardItem([...cartItem, {...product, qty: 1}])
    }
  }
  const decreaseQty = (product)=>{
    const productExit = cartItem.find((item)=> item.id === product.id)
   if(productExit.qty ===1){
    setCardItem(cartItem.filter((item)=> item.id !== product.id))
   }else{
    setCardItem(cartItem.map((item)=>(item.id === product.id ? {...productExit, qty: productExit.qty - 1}
      :item
      )))
   }
  }
  return (
    <>
    <Router>
     <Headers cartItem={cartItem} />
       <Switch>
          <Route exact path="/" >
          <Page productItems={productItems}  addToCart={addToCart} shopItems={shopItems}/>
          </Route>
          <Route exact path="/cart" >
          <Cart cartItem={cartItem}  addToCart={addToCart} decreaseQty={decreaseQty}/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
