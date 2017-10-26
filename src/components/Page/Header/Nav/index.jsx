import React from 'react';
import './style.css';
import Button from '../../Button'

const Nav = () => {
  return (
    <div className='nav-btns'>
      <ul className='nav-list'>
        <li className='list-btn'><Button>Menu</Button></li>
        <li className='list-btn'><Button>Gallery</Button></li>
        <li className='list-btn'><Button>Location</Button></li>
        <li className='list-btn'><Button>Our Story</Button></li>
    </ul>
    </div>
  )

}

export default Nav;
