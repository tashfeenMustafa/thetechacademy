/*****
  Home.js displays the home screen. Header at the top, and Game view at the bottom
*****/
import React from 'react';

import Header from '../Header/Header.js';

class Home extends React.Component {
  render () {
    return (
      <div id="home">
        <Header />
        <section id="homeBody">
          <h1 className="text-center">Learn. Build. Create.</h1>
        </section>
      </div>
    );
  }
}

export default Home;
