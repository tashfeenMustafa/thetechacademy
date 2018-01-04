/*****
  Contains Logo and name
*****/
import React from 'react';

class LogoContainer extends React.Component {
  render () {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + '/logo.png'} height="50" />
        <h5>THE TECH ACADEMY</h5>
      </div>
    );
  }
}

export default LogoContainer;
