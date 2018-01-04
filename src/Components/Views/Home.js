/*****
  Home.js displays the home screen. Header at the top, and Game view at the bottom
*****/
import React from 'react';
import Header from '../Header/Header.js';
import Game from './Game.js';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

export default Home;
