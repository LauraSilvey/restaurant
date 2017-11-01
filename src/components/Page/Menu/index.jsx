import React from 'react'
import './style.css'
import MenuItem from './MenuItem'

const Menu = (props) => {
  const menuItems = props.menuItems.map((i, index) => (
    <MenuItem
      key={index}
      title={i.title}
      description={i.description}
      price={i.price}
    />
  ))
  return (
    <div className='menu'>
      <h1 className='menu-title'>Menu</h1>
      <div className='menu-items'>
        {menuItems}
      </div>
    </div>
  )
}

export default Menu;
