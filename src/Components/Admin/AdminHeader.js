import React from 'react';

class AdminHeader extends React.Component {
  render () {
    return (
      <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Welcome to The Panel</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link logout-button" href="/logout">Logout</a>
            </nav>
          </div>
      </header>
    );
  }
}

export default AdminHeader;
