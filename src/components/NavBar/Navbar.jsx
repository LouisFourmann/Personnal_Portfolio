import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'

function Navbar() {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#contact"><AiOutlineMessage /></a>
    </nav>
  )
}

export default Navbar