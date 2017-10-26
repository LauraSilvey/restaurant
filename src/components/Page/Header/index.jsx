import React from 'react'
import './style.css'
import Nav from './Nav'
import Admin from './Admin'
import iVeggies from './images/vegies-left.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={iVeggies} alt='header pic'></img>
      </div>
      <div className='header-right'>
        <Admin />
        <div className='title'>
          <h1>Wholesome Foods</h1>
          <h3>Delicious meals made with locally sourced organic ingredients</h3>
        </div>
        <Nav />
      </div>
    </div>
  )
}

export default Header;
