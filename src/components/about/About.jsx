import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='a'>
        <div className="a-left" data-aos="fade-up">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="./myimg/robin2.jpeg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right" data-aos="fade-up-left">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be
                distracted by a readable content.
            </p>
            <p className="a-desc">
    Namaste! I'm Robin Rathore, a dedicated BTech Computer Science undergrad with expertise in web development. Proficient in ReactJS, Sass, Bootstrap, JavaScript, CSS, HTML, I craft seamless user experiences.

    <strong>Technical Skills</strong>

    <ul>
        <li>Web Development:</li>
        <ul>
            <li>Frontend: ReactJS, Sass, Bootstrap, JavaScript, CSS, HTML.</li>
            <li>Backend: Firebase, MongoDB, ExpressJS, NodeJS.</li>
            <li>Database: MongoDB.</li>
            <li>Server: ExpressJS, NodeJS.</li>
        </ul>
        <li>Programming Languages: C, C++, Python.</li>
        <li>Data Structures & Algorithms: DSA.</li>
    </ul>

    Passionate about problem-solving, I approach challenges systematically. Strong communication and interpersonal skills enhance collaboration. A lifelong learner, I explore diverse topics and contribute creatively to projects.

    Beyond tech, I'm a cooking enthusiast. 
    Let's connect for collaboration or knowledge sharing in the dynamic tech landscape!
</p>

            <div className="a-award">
                <img src="./myimg/award.jpg" alt="" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">Head Boy</h4>
                    <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro, reiciendis amet accusantium dignissimos qui?</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
