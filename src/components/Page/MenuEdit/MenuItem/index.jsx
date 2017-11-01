import React from 'react'

const MenuItem = ({ index, title, description, price, handleChange }) => {

  return (
    <div className='menu-item'>
      <input
        className='item-title'
        type='text'
        value={title}
        onChange={(event) => handleChange(index, 'title', event.target.value)}
      />
      <input
        type='text'
        value={description}
        onChange={(event) => handleChange(index, 'description', event.target.value)}
      />
      <input
        type='text'
        value={price}
        onChange={(event) => handleChange(index, 'price', event.target.value)}
      />
    </div>
  )
}

export default MenuItem;
