/*****
  Contains Logo and name
*****/
import React from 'react';

class LogoContainer extends React.Component {
  render () {
    return (
      <div className="mdl-layout__header-row top-header">
        <span className="mdl-layout-title">
          <a href="/" className="logo">
            <img src={process.env.PUBLIC_URL + '/logo.png'} />
          </a>
          <a href="/" className="title">
            <h5>The Tech Academy</h5>
          </a>
        </span>
      </div>
    );
  }
}

export default LogoContainer;
