import React from 'react'
import './header.css'
import CTA from './CTA'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Louis Fourmann</h1>
        <h5 className="text-light">Développeur Web/Mobile</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header