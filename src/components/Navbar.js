import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <header className="logo"><span>Keerthan's</span> Portfolio &nbsp;&nbsp;</header>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact Me</NavLink></li>
      </ul>
      <button><a href="images\Keerthan-Resume.pdf" download>Download CV</a></button>
    </nav>
  );
};

export default Navbar;
