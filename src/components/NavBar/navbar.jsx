import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../utilities/css/util.css';

const NavBar = () => {
  return (
    <nav className="navigation-hz">
      <div className="left-nav">
        <Link to="/" className="nav-logo">
          <img src="./assets/pettvlogo1.png" alt="logo" />
        </Link>
      </div>

      <div className="nav__search">
        <input type="text" placeholder="Search" />
        <i className="bi bi-search"></i>
      </div>

      <div className="right-nav">
        <li>
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
