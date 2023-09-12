import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'




const NavBar = () => {
    return (
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;