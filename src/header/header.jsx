import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          HOME
        </NavLink>
        <NavLink to="/shop" className="nav-link">
          SHOP
        </NavLink>
        <NavLink to="/lookbook" className="nav-link">
          LOOKBOOK
        </NavLink>
        <NavLink to="/features" className="nav-link">
          FEATURES
        </NavLink>
        <NavLink to="/pages" className="nav-link">
          PAGES
        </NavLink>
        <NavLink to="/blog" className="nav-link">
          BLOG
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
