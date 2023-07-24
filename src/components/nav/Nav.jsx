import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiMessageAdd} from 'react-icons/bi'
import {FcServices} from 'react-icons/fc'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookHalf} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#header" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }> <AiFillHome/> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }> <AiOutlineUser/> </a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BsBookHalf/> </a>
      <a href="#services" onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : '' }> <FcServices/> </a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }> <BiMessageAdd/></a>

    </nav>
  )
}

export default Nav