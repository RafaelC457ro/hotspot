import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ title }) => (
  <button className="Button Button--blue Button--large" type="button">
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string
};

export default Button;
