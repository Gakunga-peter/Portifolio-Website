import React from 'react'
import './testimonials.css'

//import swiper core and required modules.
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar:'#',
    name: 'Albert Ejuku',
    review:' Exceeded expectations, exceptional Software Developer',

  },
  {
    avatar:'#',
    name: 'Samauel',
    review:' Define perfection, Not well praised',

  },
  {
    avatar:'#',
    name: 'Alexander',
    review:' Unmatched expertise, Problem-solving genius',

  },
  {
    avatar:'#',
    name:'Jane k.M',
    review:'I have never made a better decision',

  }

]

const testimonials = () => {
  return (
    <section id="testimonials"> 
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='testimonials_container'
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}>
        {
          data.map(({avatar,name, review}, index)=>{
            return (
                   
              <SwiperSlide key={index} className="testimonial">
              <div className='client_avatar'>
                {/* <img src={avatar}> </img>  */}
              </div>
              <h5 class='client_name'> {name}</h5>
              <small className='client_review'>{review}</small>
              </SwiperSlide> 
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default testimonials
