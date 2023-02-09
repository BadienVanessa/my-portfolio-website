import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>BADIEN VANESSA</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header