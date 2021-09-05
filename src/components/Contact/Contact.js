import React from 'react'
import emailjs from 'emailjs-com'
import { BiLeftArrow } from "react-icons/bi"
import { Link } from 'react-router-dom'
import './Contact.css'


const Form = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u91vgi5', 'template_u7lctzf', e.target, 'user_t1rY7j4VtcFzisr1GxhUx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <>
    <Link to="/aboutus"><BiLeftArrow className='biArrow' color="white" fontSize="2em" /></Link>
     <div className='left-side-contact'>
    <form className="contact-form" onSubmit={sendEmail}>
      <div className='contact-form div'>
        <label>Name</label>
        <input type="text" placeholder='Name' name="name" /><br/>
        <label>Email</label>
        <input type="email" placeholder='Email Address' name="email" /><br/>
        <label>Message</label>
        <textarea placeholder='Your message' name="message"></textarea>
        <button type="submit" value="Send message">Send Message</button>
      </div>
    </form>
    </div>
        
        <div className='right-side-contact'>
             <h1>My contact</h1>
        </div>
    
    </>
  );
}
export default Form