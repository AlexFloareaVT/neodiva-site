import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

// 1. Import the logos at the top of the file
import logo from './logo.png';


const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="logo">
        <Link to="/" viewTransition>
          <img
            src={logo}
            alt="My Site Logo"
          />
        </Link>
      </div>
      <nav className="menu">
        <ul>
          <li><Link to="/" viewTransition>Home</Link></li>
          <li><Link to="/singers" viewTransition>Singers</Link></li>
          <li><Link to="/about" viewTransition>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;