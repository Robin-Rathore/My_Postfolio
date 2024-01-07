import React from 'react'
import "./productList.css"
import Producat from "../product/product"
import {products} from "../../data"
const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-text">
        <h1 className="pl-title" data-aos="fade-up">Create & Inspire. It's Robin</h1>
        <p className="pl-desc"data-aos="fade-up">
        "You possess the power to transform your dreams into reality and the ability to achieve greatness. Embrace your potential, pursue your passions, and let your journey be a testament to the extraordinary things you can accomplish."        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (<Producat key={item.id} img={item.img} link={item.link}/>))}

      </div>
    </div>
  )
}

export default ProductList
