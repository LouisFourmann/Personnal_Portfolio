import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/louis-fourmann-461909207/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/LouisFourmann" target="_blank"><FaGithub></FaGithub></a>
    </div>
  )
}

export default HeaderSocials