import React from 'react';
import './style.css';

const GalleryItem = (props) => {
  return (
    <div className='gallery-item'>
      <img src={props.image} alt='' className='gallery-img'></img>
      <div className='image-title'>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
    </div>
  )

}

export default GalleryItem;
