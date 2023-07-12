import React from 'react'
import "./product.css"
const product = ({img,link}) => {
  return (
    <div className='p' data-aos="fade-up">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target='blank' >
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default product
