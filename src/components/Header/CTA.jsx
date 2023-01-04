import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV}>Télécharger mon CV</a>
        <a href="#contact">Contactez-moi !</a>
    </div>
  )
}

export default CTA