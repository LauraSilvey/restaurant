import React from 'react'
import './style.css'
import MenuItem from './MenuItem'

const MenuEdit = (props) => {
  const renderItems = props.menuItems.map((i, index) => (
    <MenuItem
      key={index}
      index={index}
      title={props.menuItems[index]['title']}
      description={props.menuItems[index]['description']}
      price={props.menuItems[index]['price']}
      handleChange={props.handleChange}
    />
  ))
  return (
    <div className='menu'>
      <h1 className='menu-title'>Edit Menu</h1>
      <button
        onClick={props.handleEditMenuClick}
      >Save</button>
      <div className='menu-items'>
        {renderItems}
      </div>
    </div>
  )
}

export default MenuEdit;
