import React from 'react'
import './cart.css'
const Cart = ({cartItem, addToCart,decreaseQty}) => {
  // calculate the total price   
  const totalPrice = cartItem.reduce((price, item)=> price + item.qty * item.price, 0  )
  return (
    <>
      <section className='cart-items'>
      <div className="container d_flex">
      <div className="cart-details">
        {cartItem.length === 0  && <h1 className='no-items product'>No items are added in cart</h1>}

        {cartItem.map((item)=>{
            const productQty = item.price * item.qty
            return(
                <div className="cart-list product d_flex" key={item.id}>
                    <div className="img">
                        <img src={item.cover} alt="" />
                    </div>
                    <div className="cart-details">
                        <h3>{item.name}</h3>
                        <h4>
                            {item.price}.00 *{item.qty}
                            <span>${productQty}.00  </span>
                        </h4>
                    </div>
                    <div className="cart-items-function">
                      <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa fa-times"></i>
                        </button>
                      </div>  
                      <div className="cartControl d_flex">
                        <button className='incCart' onClick={()=> addToCart(item)}>
                         <i className="fa fa-plus"></i>
                         </button>
                        <button className='desCart' onClick={()=> decreaseQty(item)}>
                         <i className="fa fa-minus"></i>
                         </button>
                      </div>
                    </div>
                     </div>       
            )
         })}
         </div>
         
         <div className="cart-total product">
            <h2>Total Price</h2>
            <div className="d_flex">
                {/* <h4>Total price :</h4> */}
                <h3>${totalPrice},00</h3>
            </div>
         </div>
      </div>
      
      </section>
    </>
  )
}

export default Cart
