import React from 'react';
import './header.css'
const Head = () => {
  return (
    <div>
    <section className='head'>
     <div className='container d_flex'>
     <div className='Left row'>
      <i className='fa fa-phone'></i>
      <label>+2348100319613</label>
      <i className='fa fa-envelope'></i>
      <label>mako@gmail.com</label>
      </div>
      <div className='right row RText'>
      <label>Theme FAQ's</label>
      <label>need Help</label>
      <span className="flag-icon-background flag-icon-us"></span>
      <label>EN</label>
      <span style={{color:'white'}}></span>
      <label>USD</label>
      </div>
     </div>
    </section>
    </div>
  )
}

export default Head
