import React, { Component } from 'react';
import './style.css';
import Header from './Header'
import items from '../../menu-data'
import Gallery from './Gallery'
import Menu from './Menu'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: items,
    }
  }


  render() {
    return (
      <div className="page">
        <Header />
        <Gallery
          menuItems={this.state.menuItems}
        />
        <Menu
          menuItems={this.state.menuItems}
        />

      </div>
    );
  }
}

export default Page;
