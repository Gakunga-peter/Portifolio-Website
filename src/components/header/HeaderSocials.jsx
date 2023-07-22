import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{ImGithub} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='Header_socials'>
        <a rel="noreferrer" href="https://linkedin.com/in/peter-gakunga-a43a06224/?trk=public_profile_samename-profile&originalSubdomain=ke" target="_blank"><BsLinkedin/></a>
        <a rel="noreferrer" href="https://github.com/Gakunga-peter/Gakunga-peter" target="_blank"><ImGithub/></a>
        <a rel="noreferrer" href="https://twitter.com/PeterGakunga6" target="_blank"><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials