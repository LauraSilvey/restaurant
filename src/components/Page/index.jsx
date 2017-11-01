import React, { Component } from 'react';
import './style.css';
import Header from './Header'
import items from '../../menu-data'
import Gallery from './Gallery'
import Menu from './Menu'
import MenuEdit from './MenuEdit'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: items,
      signedIn: false,
      editMenu: false,
    }
  }

  handleSignInClick = () => {
     this.setState({ signedIn: !this.state.signedIn })
  }

  handleEditMenuClick = (event) => {
    this.setState( {editMenu: !this.state.editMenu })
  }

  handleChange = (index, inputName, value) => {
    let newMenuItems = this.state.menuItems
    newMenuItems[index][inputName] = value
    this.setState({
      menuItems: newMenuItems,
    })
  }

  render() {
    return (
      <div className="page">
        <Header
          signedIn={this.state.signedIn}
          handleSignInClick={this.handleSignInClick}
          handleEditMenuClick={this.handleEditMenuClick}
        />
        <Gallery
          menuItems={this.state.menuItems}
        />
        {this.state.editMenu
          ? <MenuEdit
            menuItems={this.state.menuItems}
            handleChange={this.handleChange}
            handleEditMenuClick={this.handleEditMenuClick}
          />
          : <Menu
            id='menu'
            menuItems={this.state.menuItems}
          />
        }
      </div>
    );
  }
}

export default Page;
