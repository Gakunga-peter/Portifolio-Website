import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
        <div className='container about_container'>
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt=''/>
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                < FaAward className = "about_icon" />
                <h5>Experience</h5>
                <small> 2+ Freelancer S.D</small>
                
                 
              </article>
              <article className='about_card'>
                < FiUsers className = "about_icon" />
                <h5>Clients</h5>
                <small> 10+ Clients</small>
                

              </article>
              <article className='about_card'>
                < VscFolderLibrary className = "about_icon" />  
                <h5>Projects</h5>
                <small> 8+ Projects</small>
                  
              </article>
            </div>
            <p>I am a fullstack software engineer with great hands-on experience in:
              <br/>
              <ul>
                <li>Web Development </li>
                <li>Android App development </li>
                <li> Desktop App Development</li>
                <li> Enterprise App Development</li>
              </ul>
              I have worked and done many projects.
              If you are interested in working with me in any of those areas you can contact me. 
            </p>
            
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>


          </div>
      </div>
    </section>
  )
}

export default about