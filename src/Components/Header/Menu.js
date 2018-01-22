/*****
  Contains code for Menu
*****/
import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/projects-and-activities">Projects and Activities</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/support-us">Support Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    );
  }
}

export default Menu;
