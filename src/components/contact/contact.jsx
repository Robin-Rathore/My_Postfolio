import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ko7alus",
        "template_7n58iiw",
        formRef.current,
        "9t7W8atw_UhOMXKj_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg" data-aos="fade-right"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title" data-aos="fade-up">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item" data-aos="fade-up">
              <img
                src="./myimg/phone.png"
                alt=""
                className="c-icon"
                data-aos="fade-right"
              />
              +91 9720684865
            </div>
            <div className="c-info-item" data-aos="fade-up">
              <img
                src="./myimg/mail.png"
                alt=""
                className="c-icon"
                data-aos="fade-right"
              />
              robinsingh248142@gmail.com
            </div>
            <div className="c-info-item" data-aos="fade-up">
              <img
                src="./myimg/location.png"
                alt=""
                className="c-icon"
                data-aos="fade-right"
              />
              NH-72, Herbertpur Vikasnagar Dehradun Uttrakhand
              <br />
              PIN: 248142
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" data-aos="fade-up">
            <b>What is your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              data-aos="fade-up"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              data-aos="fade-up"
            ></textarea>
            <button>Submit</button>
            {done && "Thankyou......"}
          </form>
          <a className="res_link"
              href="https://drive.google.com/file/d/1WAO9vu1kYyBgadhQGToDUj_IWJ4SexgS/view?usp=drivesdk"
              download="Your_Resume.pdf"
            >
          <div className="resume">
              Download Resume
          </div>
          </a>
          {done && "Thank you......"}
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useRef, useState } from 'react'
// import "./contact.css"
// import emailjs from '@emailjs/browser';
// const Contact = () => {
//     const formRef = useRef()
//     const [done, setDone] = useState(false)
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         emailjs
//         .sendForm(
//             'service_ko7alus',
//             'template_7n58iiw',
//              formRef.current,
//              '9t7W8atw_UhOMXKj_'
//              )
//       .then((result) => {
//           console.log(result.text);
//           setDone(true)
//       }, (error) => {
//           console.log(error.text);
//       });
//     }
//   return (
//     <div className='c'>
//       <div className="c-bg" data-aos="fade-right"></div>
//       <div className="c-wrapper">
//         <div className="c-left">
//             <h1 className="c-title" data-aos="fade-up">
//                 Let's discuss your project
//             </h1>
//             <div className="c-info">
//                 <div className="c-info-item"data-aos="fade-up">
//                     <img src="./myimg/phone.png" alt="" className="c-icon" data-aos="fade-right" />
//                     +91 9720684865
//                 </div>
//                 <div className="c-info-item"data-aos="fade-up">
//                     <img src="./myimg/mail.png" alt="" className="c-icon" data-aos="fade-right"/>
//                     robinsingh248142@gmail.com
//                 </div>
//                 <div className="c-info-item"data-aos="fade-up">
//                     <img src="./myimg/location.png" alt="" className="c-icon" data-aos="fade-right" />
//                     NH-72, Herbertpur Vikasnagar Dehradun Uttrakhand<br/>PIN: 248142
//                 </div>

//             </div>
//         </div>
//         <div className="c-right">
//             <p className="c-desc" data-aos="fade-up">
//                 <b>What is your story?</b> Get in touch.
//                 Always available for freelancing if the right project
//                 comes along me.
//             </p>
//             <form ref={formRef} onSubmit={handleSubmit} >
//                 <input type="text" placeholder="Name" name="user_name" data-aos="fade-up"/>
//                 <input type="text" placeholder="Subject" name="user_subject" data-aos="fade-up"/>
//                 <input type="text" placeholder="Email" name="user_email" data-aos="fade-up"/>
//                 <textarea name="message" placeholder='Message' rows="5"data-aos="fade-up"></textarea>
//                 <button>Submit</button>
//                 {done && "Thankyou......"}
//             </form>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Contact
