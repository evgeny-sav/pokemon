import React from 'react';

import logo from '../../assets/images/pokemon_logo.png';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menulist">
        <ul>
          <li>
            <NavLink to="/news" activeClassName="active">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName="active">
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
