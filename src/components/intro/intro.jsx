import React from 'react'
import "./Intro.css"
// import Me from "./robin.png"

const Intro = () => {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
        <p className='quote'> "Dream big, work hard, and create <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your own path to success."</p>
            <h2 className='i-intro'>Hello, My name</h2>
            <h1 className='i-name'>Robin Rathore</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Writer</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Programmer</div>
                    <div className="i-title-item">Speaker</div>
                </div>
            </div>
            <p className="i-desc">
                I design and develop services for all sizes, specialization in creating stylish, modern websites, online stores, and websites for schools and Educational Platforms.
            </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="./myimg/robin.png" alt=""className='i-img' />
      </div>

    </div>
  );
};

export default Intro;
