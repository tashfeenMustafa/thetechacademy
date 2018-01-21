import React from 'react';

// Calling Auth
import Auth from '../../Auth/Auth.js';

class Login extends React.Component {
  render () {
    return (
      <div>
        <h1>Login</h1>
        <Auth />
      </div>
    );
  }
}

export default Login;
