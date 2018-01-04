/****
   Main view where code for rendering Views (Home, About Us, Programs ....) should be.
****/
import React from 'react';
import Home from './Views/Home.js';

class View extends React.Component {
  render () {
    return (
      <Home />
    );
  }
}

export default View;
