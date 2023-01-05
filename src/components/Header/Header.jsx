import React from 'react'
import './header.css'
import CTA from './CTA'
import Louis from '../../assets/Louis.jpg'
import HeaderSocial from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Louis Fourmann</h1>
        <h5 className="text-light">Développeur Web/Mobile</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Louis} alt="me"/>
        </div>
        <a href='#contact' className='scroll__down'>Défiler</a>
      </div>
    </header>
  )
}

export default Header