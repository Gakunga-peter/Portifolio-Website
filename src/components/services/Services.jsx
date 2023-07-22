import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5> What I offer </h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list_icon"/>
              <p>Responsive Design</p> 
            </li>
            <li>
              <BiCheck className="service_list_icon"/>
              <p> Usability Testing: </p>
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Interaction Design: </p> 
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Information Architecture:</p> 
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>User Research: </p> 
            </li>
          </ul>
        </article>
        {/* end of ui/ux */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list_icon"/>
              <p>Website Design and Development:</p> 
            </li>
            <li>
              <BiCheck className="service_list_icon"/>
              <p> Web Application Development.</p>
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Front-End Development:</p> 
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Back-End Development: </p> 
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Website Maintenance and Support: </p> 
            </li>
            <li>
              <BiCheck className="service_list_icon"/>
              <p>API Development and Integration: </p> 
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list_icon"/>
              <p>Website Content:</p> 
            </li>
            <li>
              <BiCheck className="service_list_icon"/>
              <p> Article Writing:</p>
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Blog Writing: </p> 
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Product Descriptions: </p> 
            </li>
             <li>
              <BiCheck className="service_list_icon"/>
              <p>Case Studies: </p> 
            </li>
          </ul>
        </article>
      </div>

      
    </section>
  )
}

export default Services