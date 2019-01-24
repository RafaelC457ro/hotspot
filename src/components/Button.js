import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ title, onClick }) => (
  <button
    className="Button Button--blue Button--large"
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
