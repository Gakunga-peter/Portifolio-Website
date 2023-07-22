import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>PETER GAKUNGA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#testimonials">Testimonials</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://facebook.com/samuel.gakunga.1' target="_blank">< FaFacebook/></a>
        <a href='https://twitter.com/PeterGakunga6' target="_blank">< BsTwitter/></a>
        <a href='https://linkedin.com/in/peter-gakunga-a43a06224/?trk=public_profile_samename-profile&originalSubdomain=ke' target="_blank"><BsLinkedin/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;PETER GAKUNGA. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer