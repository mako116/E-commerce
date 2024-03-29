import React from 'react'
 import {Link} from 'react-router-dom'
const Search = ({cartItem}) => {
  window.addEventListener("scroll", ()=>{
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
       <section className='search'>
       <div className='container c_flex'>
        <div className='logo width'>
         <h2>ShopCart</h2>
       </div>
       <div className='search-box f_flex'>
       <i className='fa fa-search'></i>
       <input type='text' placeholder='search and hit enter...'/>
       <span>All category</span>
       </div>

       <div className='icon f_flex width'>
       <div className="homer">
       <Link to="/">
       <i className='fa fa-user icon-circle'></i>
       </Link>
       </div>
       <div className='cart'>
       <Link to="/cart">
        <i className='fa fa-shopping-bag icon-circle'></i>
        <span>{cartItem.length === 0 ? " " : cartItem.length}</span>
       </Link>
       </div>
       </div>
       </div>
       </section>
    </>
  )
}

export default Search
