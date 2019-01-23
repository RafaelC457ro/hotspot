import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.png";
import "./Navbar.css";

const Navbar = ({ links }) => (
  <nav className="Navbar">
    <div className="Navbar-container">
      <img className="Logo" src={logo} alt="logo" />
      <div className="Navbar-menu">
        {links.map(({ url, description }) => (
          <a className="Navbar-links" key={url} href={url}>
            {description}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Navbar;
