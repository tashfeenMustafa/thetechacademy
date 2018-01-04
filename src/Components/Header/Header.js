/*****
  Header.js contains code for the Logo header and the menu
*****/
import React from 'react';
import LogoContainer from './LogoContainer.js';
import Menu from './Menu.js';

class Header extends React.Component {
  render () {
    return (
      <header>
        <LogoContainer />
        <Menu />
      </header>
    );
  }
}

export default Header;
