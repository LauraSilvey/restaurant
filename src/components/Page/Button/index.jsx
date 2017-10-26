import React from 'react';
import './style.css';

const Button = (props) => {
const button = props.href
  ? <a href={props.href}><button>{props.children}</button></a>
  : <button>{props.children}</button>
  return (
    <div className='button'>
     {button}
    </div>
  )
}

export default Button;
