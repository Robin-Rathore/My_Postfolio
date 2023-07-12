import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='a'>
        <div className="a-left" data-aos="fade-up">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="./myimg/robin2.jpg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right" data-aos="fade-up-left">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be
                distracted by a readable content.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime soluta iusto
                 quod a deleniti enim omnis iste. Veritatis sit a architecto dignissimos officia possimus 
                 dolore corrupti magni dolor quisquam ex maxime totam repudiandae, vel laudantium amet quod
                 culpa ipsam iure optio, explicabo voluptates! Accusantium ea, ipsam quam, quod perspiciatis
                 expedita dolores laborum, nemo non maiores molestias? Harum, repellat provident?
            </p>
            <div className="a-award">
                <img src="./myimg/award.jpg" alt="" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">Bharat Ratna</h4>
                    <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro, reiciendis amet accusantium dignissimos qui?</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
