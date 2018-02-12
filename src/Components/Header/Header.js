/*****
  Header.js contains code for the Logo header and the menu
*****/
import React from 'react';

import Video from './Video.js';
import LogoContainer from './LogoContainer.js';
import Menu from './Menu.js';

class Header extends React.Component {
  render () {
    return (
      <div>

        <div className="layout-transparent mdl-layout mdl-js-layout">
          <header className="mdl-layout__header mdl-layout__header--transparent">
            (
              {this.props.path === "/" ? <Video /> : null}
            )
            <LogoContainer />
            <Menu />
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
