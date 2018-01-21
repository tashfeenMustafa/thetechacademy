import React from 'react';

class AdminDrawer extends React.Component {
  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Admin Panel</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Content</a>
            <a className="mdl-navigation__link" href="">Pages</a>
            <a className="mdl-navigation__link" href="">Stats</a>
            <a className="mdl-navigation__link" href="">Users</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">{/* Your content goes here */}</div>
        </main>
      </div>
    );
  }
}

export default AdminDrawer.js;
