import React from 'react';
import AdminHeader from './AdminHeader.js';

class AdminPanel extends React.Component {
  render () {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Admin Panel</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Content</a>
              <a className="mdl-navigation__link" href="">Pages</a>
              <a className="mdl-navigation__link" href="">Stats</a>
              <a className="mdl-navigation__link" href="">Users</a>
              <a className="mdl-navigation__link" href="">Settings</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">

              <div>
                <AdminHeader />
              </div>
              <h1>Get Started</h1>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
