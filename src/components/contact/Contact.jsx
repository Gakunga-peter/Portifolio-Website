import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com' 

const Contant = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9paemj', 'template_7rir5wn', form.current, 'hkWYSc3vStH0Afi2B')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <MdAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>gakungakyle@gmail.com</h5>
            <a rel="noreferrer" href='mailto:gakungakyle@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <FaWhatsappSquare className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254718667509</h5>
            <a rel="noreferrer" href='htpps://api.whatsapp.com/send?phone+254718667509' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Gakunga Peter</h5>
            <a rel="noreferrer" href='https://m.me/samuel.gakunga.1' target='_blank'>Send a message</a>
          </article>


        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="text" name="name" placeholder='Your Full Name' require/>
          <input type="text" name="Subject" placeholder='Subject' require/>
          <input type="email" name="email" placeholder='Your Email' require/>
          <textarea name="message" row="7" placeholder='Your Message' require/>
          <button type='submit' className='btn btn-primary'> Send Message</button>       
        </form>
      </div>

    </section>
  )
}

export default Contant