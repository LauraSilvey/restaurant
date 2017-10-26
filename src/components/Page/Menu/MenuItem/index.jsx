import React from 'react'

const MenuItem = (props) => {
  return (
    <div className='menu-item'>
      <div className='item-title'>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
    </div>
  )
}

export default MenuItem;
