import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio.s.m.s.png'
import img2 from '../../assets/portfolio.ecomerce.png'
import img3 from '../../assets/portfolio.websites.jpeg'
import img4 from '../../assets/portfolio.blog.jpeg'
import img5 from '../../assets/portfolio.patient.png'

const data=[
  {
    id:1,
    image:img1,
    title:'High School Student Management System',
    github:'https://github.com/Gakunga-peter/Gakunga-peter',
    demo:'https://github.com/Gakunga-peter/Student-Management-System'
  },
  {
    id: 2,
    image:img2,
    title:'Stock Management System',
    github:'https://github.com/Gakunga-peter/Gakunga-peter',
    demo:'https://github.com/Gakunga-peter'
  },
  {
    id: 3,
    image:img3,
    title:'Portfolio Websites',
    github:'https://github.com/Gakunga-peter/Gakunga-peter',
    demo:'https://github.com/Gakunga-peter/Portifolio-Website'
  },
  {
    id: 4,
    image:img4,
    title:'Blogs Website',
    github:'https://github.com/Gakunga-peter/Gakunga-peter',
    demo:'https://github.com/Gakunga-peter'
  },
  {
    id: 5,
    image:img5,
    title:'Patient Files Management System',
    github:'https://github.com/Gakunga-peter/Gakunga-peter',
    demo:'https://github.com/Gakunga-peter',
  },

]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, title, image, github, demo}) =>{
            return (
              <article className='portfolio_item'>
                <div key={id} className='portfolio_item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>    
              </article>
            )
          })
          
        }

        
      </div>
    </section>
  )
}

export default portfolio