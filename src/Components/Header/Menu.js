/*****
  Contains code for Menu
*****/
import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render () {
    return (
      <div className="mdl-layout__header-row navigation_container">
        <nav className="mdl-navigation navigation">
          <Link className="mdl-navigation__link text-center" to="/">HOME</Link>
          <Link className="mdl-navigation__link" to="/about-us">ABOUT US</Link>
          <Link className="mdl-navigation__link" to="/programs">PROGRAMS</Link>
          <Link className="mdl-navigation__link" to="/projects-and-activities">PROJECTS &amp; ACTIVITIES</Link>
          <Link className="mdl-navigation__link" to="/tta-blog">TUTORIALS FOR YOU</Link>
          <Link className="mdl-navigation__link" to="/tta-blog">BLOG</Link>
          <Link className="mdl-navigation__link" to="/contact-us">CONTACT US</Link>
        </nav>
      </div>
    );
  }
}

export default Menu;
