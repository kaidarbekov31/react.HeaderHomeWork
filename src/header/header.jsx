import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/page1" className="nav-link">
          Page 1
        </NavLink>
        <NavLink to="/page2" className="nav-link">
          Page 2
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
