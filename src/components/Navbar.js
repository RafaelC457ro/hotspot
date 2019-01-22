import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.png";

const Navbar = ({ links }) => (
  <nav>
    <img src={logo} alt="logo" />
    <div>
      {links.map(({ url, description }) => (
        <a key={url} href={url}>
          {description}
        </a>
      ))}
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
