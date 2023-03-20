import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const NextArrow = (props)=>{
  const {onClick}= props
  return(
     <div className="control-bt" onClick={onClick}>
      <button className="next">
          <i className="fa fa-arrow-right"></i>
      </button>
     </div>
  )
}
const PrevArrow = (props)=>{
  const {onClick}=props
  return(
      <div className="control-bt" onClick={onClick}>
          <button className="prev">
              <i className="fa fa-arrow-left"></i>
          </button>
      </div>
  )
}

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    marign:202
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
            <div className="width" key={index}>
              <div className='boxsx'>
                <div className='imgs'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </div>
            </>
          )
        })}
        
      </Slider>
    </>
  )
}

export default Dcard
