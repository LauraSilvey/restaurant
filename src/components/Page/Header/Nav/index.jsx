import React from 'react';
import './style.css';
import Button from '../../Button'

const Nav = (props) => {

  return (
    <div className='nav-btns'>
      <ul className='nav-list'>
        <li className='list-btn'><Button>Menu</Button></li>
        <li className='list-btn'><Button>Gallery</Button></li>
        <li className='list-btn'><Button>Location</Button></li>
        <li className='list-btn'><Button>Our Story</Button></li>
        {props.signedIn
          ? <div>
            <li className='list-btn'><button
              onClick={(event) => {
                props.handleSignInClick()
                props.handleEditMenuClick()
              }}>Sign Out</button></li>
            <li className='list-btn'><button onClick={props.handleEditMenuClick}>Edit Menu</button></li>
          </div>
          : <li className='list-btn'><button onClick={props.handleSignInClick}>Sign In</button></li>
        }


      </ul>
    </div>
  )
}

export default Nav;
