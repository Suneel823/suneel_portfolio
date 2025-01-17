import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <section id='contact'>
      <h5 className='gettouch'>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>vulavalasuneelkumar823@gmail.com</h6>
            <a href="mailto:vulavalasuneelkumar823@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin  className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>linkedin.com</h5>
            <a href="https://www.linkedin.com/in/suneel-kumar-vulavala-1b8a382a8/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact