import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NextArrow = (props)=>{
  const {onClick}= props
  return(
     <div className="control-btns" onClick={onClick}>
      <button className="next">
          <i className="fa fa-arrow-right"></i>
      </button>
     </div>
  )
}
const PrevArrow = (props)=>{
  const {onClick}=props
  return(
      <div className="control-btns" onClick={onClick}>
          <button className="prev">
              <i className="fa fa-arrow-left"></i>
          </button>
      </div>
  )
}
const SlideCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    }
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left spaced'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='righter'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
