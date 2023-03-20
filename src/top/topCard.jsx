import React from 'react'
import Tdata from './tdata'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


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

const TopCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    }
  return (
    <>
    <Slider {...settings}>
        {Tdata.map((value,index) => {
            return(
              <>
                <div className="box product" key={index}>
                      <div className="nametop d_flex">
                        <span className="tleft">{value.para}</span>
                        <span className="tright">{value.desc}</span>
                      </div>
                      <div className="img">
                        <img src={value.cover} alt="" />
                      </div>
                </div>
                </>
            )
        })}
        </Slider>
    </>
  )
}

export default TopCard
