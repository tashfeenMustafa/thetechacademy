import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AdminHeader from './AdminHeader.js';
import Pages from './Pages.js';
import Stats from './Stats.js';
import Users from './Users.js';
import Settings from './Settings';

import './Admin.css';

class Content extends React.Component {
  render () {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Admin Panel</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="/content">Content</a>
              <a className="mdl-navigation__link" href="/pages">Pages</a>
              <a className="mdl-navigation__link" href="/stats">Stats</a>
              <a className="mdl-navigation__link" href="/users">Users</a>
              <a className="mdl-navigation__link" href="/settings">Settings</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">

              <div>
                <AdminHeader />
              </div>
              <h1 className="admin get-started">Upload Content</h1>
            </div>
          </main>
          <div>
          <BrowserRouter>
            <div>
              <Route path="/content" exact component={Content} />
              <Route path="/pages" exact component={Pages}/>
              <Route path="/stats" exact component={Stats} />
              <Route path="/users" exact component={Users} />
              <Route path="/settings" exact component={Settings} />
            </div>
          </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
