import React from 'react'
import './style.css'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
  const menuItems = props.menuItems.map((i, index) => (
    <GalleryItem
      title={i.title}
      image={i.image}
      description={i.description}
      price={i.price}
    />
  ))
  return (
    <div className='gallery'>
      <h1 className='gallery-title'>Our Fresh Meals</h1>
      <div className='gallery-items'>
        {menuItems}
      </div>
    </div>
  )
}

export default Gallery;