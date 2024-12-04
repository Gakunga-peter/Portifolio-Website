import React from 'react'
import CV from "../../assets/cv.pdf"
import CV from "../../assets/Gakunga_P_Kiarie_Resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href={Gakunga_P_Kiarie_Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA
