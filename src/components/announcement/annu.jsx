import React from 'react'
import './annouc.css'
const Annu = () => {
    const mystyle={
        width:'37%',
        height:'340px'
    }
    const mystyle1={
        width:'60%',
        height:'340px',
    }
  return (
    <>
    <section className="annouc background">
        <div className="container d_flex">
            <div className="img" style={mystyle}>
                <img src="./images/banner-1.png" width="100%" height="100%" alt='' />
            </div>
            <div className="img" style={mystyle1}>
               <img src="./images/banner-2.png" width="100%" height="100%" alt='' />
          </div>
        </div>
    </section>
    </>
  )
}

export default Annu
